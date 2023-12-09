import {
  LocalWallet,
  SmartWallet,
  ThirdwebSDK,
  isContractDeployed,
} from "@thirdweb-dev/react";
import { credentialAccountFactory } from "./constant";
import { whiteList } from "../lib/api";

const clientId: string = import.meta.env.VITE_THIRDWEB_APP_ID;

export const createSmartWallet = () => {
  const smartWallet = new SmartWallet({
    chain: "mumbai",
    factoryAddress: credentialAccountFactory,
    gasless: true,
    clientId,
  });
  return smartWallet;
};

export const getWalletAddressForUser = async (
  sdk: ThirdwebSDK,
  username: string
) => {
  const factory = await sdk.getContract(credentialAccountFactory);
  const smartWalletAddress: string = await factory.call("accountOfUsername", [
    username,
  ]);
  return smartWalletAddress;
};

export const connectSmartWallet = async (
  username: string,
  password: string,
  statusCallback: (status: string) => void
) => {
  statusCallback("Checking if the user has wallet ....");
  const sdk = new ThirdwebSDK("mumbai", {
    clientId,
  });
  const smartWalletAddress = await getWalletAddressForUser(sdk, username);

  const isDeployed = await isContractDeployed(
    smartWalletAddress,
    sdk.getProvider()
  );

  const smartWallet = createSmartWallet();
  const personalWallet = new LocalWallet();
  if (isDeployed) {
    statusCallback("Username exists, accessing onchain data...");
    const contract = await sdk.getContract(smartWalletAddress);
    const metaData = await contract.metadata.get();
    const encryptedWallet = metaData.encryptedWallet;
    localStorage.setItem("encryptedWallet", encryptedWallet);
    localStorage.setItem("encryptedPassword", password);
    localStorage.setItem("encryptedUserName", username);
    if (!encryptedWallet) {
      throw new Error("No Encrypted Wallet found");
    }
    statusCallback("Decrypting wallet...");
    await new Promise((resolve) => setTimeout(resolve, 300));
    await personalWallet.import({
      encryptedJson: encryptedWallet,
      password: password,
    });
    statusCallback("connecting...");
    await smartWallet.connect({ personalWallet });
    return smartWallet;
  } else {
    statusCallback("new username , generating a personal wallet ...");
    await personalWallet.generate();
    const encryptedWallet = await personalWallet.export({
      strategy: "encryptedJson",
      password: password,
    });
    await smartWallet.connect({ personalWallet });
    statusCallback("uploading and registering username onchain");
    await smartWallet.deploy();
    const contract = await smartWallet.getAccountContract();

    const encryptedWalletUri = await sdk.storage.upload({
      name: username,
      encryptedWallet,
    });
    localStorage.setItem("encryptedWallet", encryptedWallet);
    localStorage.setItem("encryptedPassword", password);
    localStorage.setItem("encryptedUserName", username);
    await contract
      .call("register", [username, encryptedWalletUri])
      .then((resp) => console.log(resp));
    return smartWallet;
  }
};

export const connectDirectly = async (
  encryptedWallet: string,
  password: string,
  statusCallback: (status: string) => void
) => {
  const smartWallet = createSmartWallet();
  const personalWallet = new LocalWallet();

  statusCallback("Decrypting wallet...");
  await new Promise((resolve) => setTimeout(resolve, 300));
  await personalWallet.import({
    encryptedJson: encryptedWallet,
    password: password,
  });
  statusCallback("connecting...");
  await smartWallet.connect({ personalWallet });

  return smartWallet;
};
