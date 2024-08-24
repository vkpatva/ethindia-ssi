import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CredReqCard } from "./CredRequestCard";
import CredContainer from "./CredContainer";
import IdPng from "../assets/card.png";
import EmpPng from "../assets/proof-of-concept.png";
import AuthSVG from "../assets/authentication.svg";
import CompanyPNG from "../assets/business-and-trade.png";
import VcSVG from "../assets/employment.svg";
import NotificationSVG from "../assets/notification.svg";
import PowerPNG from "../assets/power.svg";
import { SendEmploymentVC } from "../lib/api";
import PolygonIDVerifier from "./PolygonIdVerifier";
import { toast } from "react-toastify";

export const Employment = () => {
  const [steps, setSteps] = useState(1);
  const [vcVer, setVcVer] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-[#212223] ">
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
          </div>
        </div>
      </header>
      <div className="relative flex flex-col justify-center overflow-hidden rounded-lg bg-[#3A3B3B] w-[75vw] h-[80vh]">
        {steps == 1 ? (
          <CredContainer logo={VcSVG}>
            <div className="flex flex-col items-center h-full justify-between py-6">
              <div className="  flex flex-col leading-loose ">
                <div className="flex-1 my-4">
                  <p className="text-3xl md:text-4xl font-semibold text-white">
                    Get your Employment VC 📑
                  </p>
                </div>
                <div className="pt-6 flex-1 mb-6">
                  <p className="text-white">
                    Level up your career effortlessly with an Employment
                    Verifiable Credential, showcasing salary and work history
                    seamlessly. Streamline your enrollment process, presenting a
                    concise and verified snapshot of your professional journey.
                    Elevate your career with confidence.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col items-center justify-center h-full">
                    <CredReqCard
                      title={"You're connecting with"}
                      logo={CompanyPNG}
                      content={"smartSense Consulting Solutions"}
                    ></CredReqCard>
                    <CredReqCard
                      title={"You need to present"}
                      logo={IdPng}
                      content={"National ID Card"}
                    ></CredReqCard>
                    <CredReqCard
                      title={"You'll receive"}
                      logo={EmpPng}
                      content={"Employment Proof"}
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
          <CredContainer logo={AuthSVG}>
            <div className="flex flex-col items-center h-full justify-between py-6">
              <div className="  flex flex-col leading-loose ">
                <div className="flex-1 my-4">
                  <p className="text-3xl md:text-4xl font-semibold text-white">
                    Verify your National ID 🕵️‍♀️
                  </p>
                </div>
                <div className="pt-6 flex-1 mb-6">
                  <p className="text-white">
                    To issue Employment, the company needs to verify your valid
                    National ID. Please provide the necessary details for a
                    smooth verification process.
                  </p>
                </div>
                <div>
                  <PolygonIDVerifier
                    onVerificationResult={() => {
                      toast("National Id Verified", { type: "info" });
                      const userId = localStorage.getItem("userId") as string;
                      SendEmploymentVC(userId);

                      setVcVer(true);
                    }}
                  ></PolygonIDVerifier>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-end w-[100%]">
                <div
                  className="has-tooltip"
                  onClick={() => {
                    if (vcVer) {
                      setSteps(3);
                    } else {
                      toast("Verify the required Credentials", {
                        type: "warning",
                      });
                    }
                  }}
                >
                  <button className="text-sm bg-white text-black px-3 py-1 rounded font-semibold shadow-sm opacity-100">
                    GET
                  </button>
                </div>
              </div>
            </div>
          </CredContainer>
        ) : (
          <CredContainer logo={NotificationSVG}>
            <div className="flex flex-col items-center h-full justify-between py-6">
              <div className="  flex flex-col leading-loose ">
                <div className="flex-1 my-4">
                  <p className="text-3xl md:text-4xl font-semibold text-white">
                    Check your phone 👀
                  </p>
                </div>
                <div className="pt-6 flex-1 mb-6">
                  <p className="text-white">
                    You should have a notification from your phone. Check your
                    wallet! We’ve sent you the employment credentials.
                    Experience the power of verifiable credentials for secure
                    and seamless verification of your employment.
                  </p>
                </div>

                <img className="mt-10 h-[35vh]" src={PowerPNG} />
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
