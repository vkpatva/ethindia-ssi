import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ToastContainer } from "react-toastify";
import "./styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
const activeChain = "mumbai";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_THIRDWEB_APP_ID}
      activeChain={activeChain}
    >
      <App />
      <ToastContainer />
    </ThirdwebProvider>
  </BrowserRouter>
);
