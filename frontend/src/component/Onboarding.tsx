import { OnBoardingContainer } from "./OnBoardingContainer";
import LoginSVG from "../assets/verify.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Onboarding = () => {
  const nav = useNavigate();
  const [step, setStep] = useState(1);
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#212223]">
      <div className="relative flex flex-col w-[60rem] justify-center overflow-hidden rounded-lg bg-[#3A3B3B]">
        {step == 1 ? (
          <>
            <span className="absolute top-0 h-1 w-[40%] bg-blue-600"></span>

            <OnBoardingContainer logo={LoginSVG}>
              <div className="flex flex-col items-center h-full justify-between py-6">
                <div className="  flex flex-col leading-loose ">
                  <div className="flex-1 my-4">
                    <p className="text-3xl md:text-4xl font-semibold text-white">
                      Let's fill your&nbsp;
                      <p className="inline text-blue-500">wallet! 🆔</p>
                    </p>
                  </div>
                  <div className="pt-6 flex-1 mb-3">
                    <p className="text-white">
                      Download the PolygonID Wallet on your phone, If you
                      haven't done so yet. Use the wallet to scan the QR-code
                      below.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden bg-white  p-5 w-240 mx-auto">
                  {/* QR Code from backend - getAuthQR */}
                </div>
                <p className="text-white">
                  Scan the QR-code with your Polygon ID Wallet
                </p>
                <div
                  onClick={async () => {
                    setStep(2);
                  }}
                  className="place-self-end"
                >
                  <button className="bg-white text-black font-semibold py-1.5 px-4 rounded transition duration-300 ease-in-out transform text-sm shadow-sm opacity-100 hover:opacity-80">
                    Next
                  </button>
                </div>
              </div>
            </OnBoardingContainer>
          </>
        ) : (
          <div>
            <span className="absolute top-0 h-1 w-[80%] bg-blue-600"></span>
            <OnBoardingContainer logo={LoginSVG}>
              <div className="flex flex-col items-center h-full justify-between py-6">
                <div className="  flex flex-col leading-loose ">
                  <div className="flex-1 my-4">
                    <p className="text-3xl md:text-4xl font-semibold text-white">
                      Accept your new&nbsp;
                      <p className="inline text-blue-500">credentials! 💳</p>
                    </p>
                  </div>
                  <div className="pt-6 flex-1 mb-3">
                    <p className="text-white">
                      You should have a notification from your phone. Check your
                      wallet! We’ve sent you the credentials below to help you
                      get started.
                    </p>
                  </div>
                  <img className="mt-10 h-[25vh]" src={LoginSVG} />
                </div>

                <div
                  onClick={async () => {
                    //todo : nav to home
                    localStorage.setItem("onboard", "true");
                    nav("/");
                  }}
                  className="place-self-end"
                >
                  <button className="bg-white text-black font-semibold py-1.5 px-4 rounded transition duration-300 ease-in-out transform text-sm shadow-sm opacity-100 hover:opacity-80">
                    Let's Go
                  </button>
                </div>
              </div>
            </OnBoardingContainer>
          </div>
        )}
      </div>
    </div>
  );
};
