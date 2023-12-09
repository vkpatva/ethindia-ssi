import ConsumerAbi from "../utils/abi/Consumer.json";
import { ethers } from "ethers";
import {
  CredentialEventService as ConsumerContract,
  SubId,
} from "../utils/constant";
const consumerAddress = ConsumerContract;
const subscriptionId = SubId;

export const makeClaim = async (signer: any) => {
  const donId = "fun-polygon-mumbai-1";
  const args: any[] = [];
  const gasLimit = 300000;

  const functionsConsumer = new ethers.Contract(
    consumerAddress,
    ConsumerAbi,
    signer
  );

  const source = `
    const response = Functions.makeHttpRequest({
      url : 'https://random-data-api.com/api/v2/users',
      method : "GET"
  })
  const finalResponse = await response;
  console.log(finalResponse['data'].id);
  return Functions.encodeUint256(parseInt(finalResponse['data'].id * 1000))
    `;

  const transaction = await functionsConsumer.sendRequest(
    source,
    "0x",
    0,
    0,
    args,
    [],
    subscriptionId,
    gasLimit,
    ethers.utils.formatBytes32String(donId as any),
    {
      gasLimit: gasLimit,
    }
  );

  console.log({ ...transaction });
  console.log(
    `\n✅ Functions request sent! Transaction hash ${transaction.hash}. Waiting for a response...`
  );

  await transaction.wait();
  console.log("transaction completed", { ...transaction });
};
