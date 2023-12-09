import { ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { Signer } from "ethers";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Onboarding } from "./Onboarding";
import { Insurance } from "./InsuranceVC";
import { Employment } from "./EmploymentVC";
import { Lab } from "./LabVC";
import { Claim } from "./claim";
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
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/claim" element={<Claim />} />
      </Routes>
    </ThirdwebSDKProvider>
  );
};
