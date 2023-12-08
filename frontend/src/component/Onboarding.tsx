import { OnBoardingContainer } from "./OnBoardingContainer";
import LoginSVG from "../assets/verify.svg";
export const Onboarding = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#212223]">
      <div className="relative flex flex-col w-[60rem] justify-center overflow-hidden rounded-lg bg-[#3A3B3B]">
        <span className="absolute top-0 h-1 w-[25%] bg-blue-600"></span>

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
                <p className="dark:text-white">
                  Download the PolygonID Wallet on your phone, If you haven't
                  done so yet. Use the wallet to scan the QR-code below.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white p-5 w-240 mx-auto">
              {/**
               * OR Code from backend
               */}
            </div>
            <p className="text-white">
              Scan the QR-code with your Polygon ID Wallet
            </p>
            <div onClick={async () => {}} className="place-self-end">
              <button
                className="bg-black dark:bg-white text-black font-semibold py-1.5 px-4 rounded transition duration-300 ease-in-out transform text-sm shadow-sm opacity-100 hover:opacity-80"
                data-cy="standard-button"
              >
                Next
              </button>
            </div>
          </div>
        </OnBoardingContainer>
      </div>
    </div>
  );
};
