import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const nav = useNavigate();
  useEffect(() => {
    const onboard = localStorage.getItem("onboard");
    console.log(onboard);
    if (onboard != "true") {
      nav("/onboarding");
    }
  }, []);
  return <>Home Screen</>;
};
