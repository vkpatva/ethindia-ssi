import CredContainer from "./CredContainer";
import { CredReqCard } from "./CredRequestCard";
import { useState } from "react";
import { CredReqMultiple } from "./CredReqCardMultiple";
import { useNavigate } from "react-router-dom";
import LoginSVG from "../assets/verify.svg";
export const Insurance = () => {
  const [steps, setSteps] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#212223] flex-col">
      <header>
        <div className="mx-auto max-w-screen-xl py-4 w-[100vw]">
          <div
            className="sm:flex sm:items-center sm:justify-between cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="text-center sm:text-left">
              <img
                src="public/images/smartsense-white.png"
                className="h-[70px] w-auto"
              ></img>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Timeline
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="relative flex flex-col justify-center overflow-hidden rounded-lg bg-[#3A3B3B] w-[75vw] h-[80vh]">
        {steps == 1 ? (
          <CredContainer logo={LoginSVG}>
            <div className="flex flex-col items-center h-full justify-between py-6">
              <div className="  flex flex-col leading-loose ">
                <div className="flex-1 my-4">
                  <p className="text-3xl md:text-4xl font-semibold text-white">
                    Get your Insurance VC 🛡️ ☂️
                  </p>
                </div>
                <div className="pt-6 flex-1 mb-6">
                  <p className="dark:text-white">
                    Secure your future with ease through a Term Insurance
                    Verifiable Credential. Simplify the enrollment journey,
                    presenting a clear and verified overview of your coverage.
                    Elevate your financial well-being with confidence, ensuring
                    a protected and empowered tomorrow.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col items-center justify-center h-full">
                    <CredReqCard
                      title={"You're connecting with"}
                      logo={LoginSVG}
                      content={"Tata AIA Insurance"}
                    ></CredReqCard>
                    <CredReqMultiple
                      title={"You need to present"}
                      infoArray={[
                        { logo: LoginSVG, content: "Employment Proof" },
                        { logo: LoginSVG, content: "Laboratory Report" },
                      ]}
                    ></CredReqMultiple>
                    <CredReqCard
                      title={"You'll receive"}
                      logo={LoginSVG}
                      content={"Term Insurance VC"}
                    ></CredReqCard>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-end w-[100%]">
                <div className="has-tooltip" onClick={() => setSteps(2)}>
                  <button className="text-sm bg-white text-black px-3 py-1 rounded font-semibold shadow-sm opacity-100">
                    START
                  </button>
                </div>
              </div>
            </div>
          </CredContainer>
        ) : steps == 2 ? (
          <CredContainer logo={LoginSVG}>
            <div className="flex flex-col items-center h-full justify-between py-6">
              <div className="  flex flex-col leading-loose ">
                <div className="flex-1 my-4">
                  <p className="text-3xl md:text-4xl font-semibold text-white">
                    Verify your Credentials 🕵️‍♀️
                  </p>
                </div>
                <div className="pt-6 flex-1 mb-6">
                  <p className="text-white">
                    To secure your Term Insurance, present Verifiable
                    Credentials for salary and lab reports. Your cooperation
                    ensures a smooth process. Thank you.
                  </p>
                </div>
                <div></div>
              </div>
              <div className="flex flex-1 items-end justify-end w-[100%]">
                <div className="has-tooltip" onClick={() => {}}>
                  <button className="text-sm bg-white text-black px-3 py-1 rounded font-semibold shadow-sm opacity-100">
                    GET
                  </button>
                </div>
              </div>
            </div>
          </CredContainer>
        ) : (
          <CredContainer logo={LoginSVG}>
            <div className="flex flex-col items-center h-full justify-between py-6">
              <div className="  flex flex-col leading-loose ">
                <div className="flex-1 my-4">
                  <p className="text-3xl md:text-4xl font-semibold text-white">
                    Check your phone 👀
                  </p>
                </div>
                <div className="pt-6 flex-1 mb-6">
                  <p className="dark:text-white">
                    You should have a notification from your phone. Check your
                    wallet! We’ve sent you the Insurance credentials. Experience
                    the power of verifiable credentials for secure and seamless
                    verification of your Term Insurance.
                  </p>
                </div>

                <img className="mt-10 h-[35vh]" src={LoginSVG} />
              </div>
              <div className="flex flex-1 items-end justify-end w-[100%]">
                <div className="has-tooltip" onClick={() => navigate("/")}>
                  <button className="text-sm bg-white text-black px-3 py-1 rounded font-semibold shadow-sm opacity-100">
                    HOME
                  </button>
                </div>
              </div>
            </div>
          </CredContainer>
        )}
      </div>
    </div>
  );
};
