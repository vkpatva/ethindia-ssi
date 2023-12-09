import { useNavigate } from "react-router-dom";
import { makeClaim } from "../lib/SendRequest";
import { useAddress, useSigner } from "@thirdweb-dev/react";

export const Claim = () => {
  const navigate = useNavigate();
  const signer = useSigner();
  const add = useAddress();
  console.log(add);
  return (
    <div className="bg-[#3A3B3B] h-[100vh] w-[100vw] py-10">
      <header>
        <div className="mx-auto max-w-screen-xl py-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div
              className="text-center sm:text-left cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src="public/images/smartsense-white.png"
                className="h-[70px] w-auto"
                alt="Logo"
              ></img>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                onClick={() => {
                  navigate("/timeline");
                }}
              >
                Timeline
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col mx-[240px] mt-8 px-6 py-4 bg-[#212223] text-white rounded-lg shadow-lg h-[75vh]">
        <div className="flex flex-row h-full gap-8 items-center p-[20px]">
          <div className="w-[35%] bg-[#2f2f2f] rounded-lg shadow-lg p-8 h-full flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-white mb-4">
              File Your Insurance Claim
            </h2>
            <img
              src="src/assets/claim.svg"
              className="w-full h-[300px] mb-6"
              alt="Claim Illustration"
            />
            <p className="text-gray-300 mb-4">
              If you've experienced an incident, initiate the insurance claim
              process now. We will process your claim data using Chainlink
              Functions. Keep Checking Timeline to know status.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
              onClick={() => makeClaim(signer)}
            >
              Claim Now
            </button>
          </div>

          <div className="w-[65%] bg-gray-700 rounded-lg shadow-lg p-8">
            Show NFT minted
          </div>
        </div>
      </div>
    </div>
  );
};
