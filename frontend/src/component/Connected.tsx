import { ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { Signer } from "ethers";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Onboarding } from "./Onboarding";
export const Connected = ({ signer }: { signer: Signer }) => {
  return (
    <ThirdwebSDKProvider
      signer={signer}
      activeChain={"mumbai"}
      clientId={import.meta.env.VITE_THIRDWEB_APP_ID}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </ThirdwebSDKProvider>
  );
};
