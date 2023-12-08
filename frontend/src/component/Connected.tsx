import { ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { Signer } from "ethers";

export const Connected = ({ signer }: { signer: Signer }) => {
  return (
    <ThirdwebSDKProvider
      signer={signer}
      activeChain={"mumbai"}
      clientId={import.meta.env.VITE_THIRDWEB_APP_ID}
    >
      Onboarded
    </ThirdwebSDKProvider>
  );
};
