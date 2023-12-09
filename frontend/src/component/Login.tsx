import { Field, Form } from "react-final-form";
import {
  generateRandomChallenge,
  registerAccount,
  verifyChallenge,
} from "../utils/webauthn";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { connectDirectly, connectSmartWallet } from "../utils/wallet";
import { Connected } from "./Connected";
import { Spinner } from "./Spinner";
import { Error } from "./Error";
type RegisterForm = {
  username: string;
};
export const Login = () => {
  const [signer, setSigner] = useState<any>(undefined);
  const [loadingStatus, setLoadingStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const connectWallet = async (userName: string, password: string) => {
    try {
      setIsLoading(true);
      const wallet = await connectSmartWallet(userName, password, (status) =>
        setLoadingStatus(status)
      );
      const s = await wallet.getSigner();
      setSigner(s);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(error);
      setError((err as any).message);
    }
  };
  const register = async (accountName: string) => {
    try {
      const challenge = generateRandomChallenge(100);
      await registerAccount(accountName, challenge);
    } catch (err) {
      console.log(err);
    }
  };

  const verify = async () => {
    try {
      const challenge = generateRandomChallenge(100);
      const { signature, rawId } = await verifyChallenge(challenge);
      if (signature && rawId) {
        await connectWallet(rawId, signature);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmit = (values: RegisterForm) => {
    register(values.username);
  };
  const validate = (values: RegisterForm) => {
    const errors: Partial<RegisterForm> = {};
    if (!values.username) {
      errors.username = "Required";
    }
    return errors;
  };
  const checkLoggedIn = async () => {
    const encryptedWallet = localStorage.getItem("encryptedWallet");
    const encryptedPassword = localStorage.getItem("encryptedPassword");
    if (encryptedPassword && encryptedWallet) {
      setIsLoading(true);

      const wallet = await connectDirectly(
        encryptedWallet,
        encryptedPassword,
        (status) => setLoadingStatus(status)
      );
      const s = await wallet.getSigner();
      setSigner(s);
      setIsLoading(false);
    }
  };
  return signer ? (
    <Connected signer={signer} />
  ) : isLoading ? (
    <Spinner status={loadingStatus} />
  ) : error ? (
    <Error />
  ) : (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-[#232323] dark:text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-[80px] w-auto"
          src="public/images/smartsense-white.png"
          alt="Smart Sense"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Welcome 👋
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form className="space-y-2" onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <div className="min-h-[85px]">
                    <div>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6"
                      >
                        Username 🧑‍💻
                      </label>
                      <div className="mt">
                        <input
                          id="username"
                          type="username"
                          placeholder="Enter your Username "
                          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700"
                          {...input}
                        />
                      </div>
                    </div>
                    {meta.touched && meta.error && (
                      <span className="text-xs font-medium text-red-500 ">
                        {meta.error}
                      </span>
                    )}
                  </div>
                )}
              </Field>

              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-800 dark:hover:bg-indigo-700"
              >
                Create Passkey 🔐
              </button>
            </form>
          )}
        />
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-96 h-px my-8 bg-black border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-white -translate-x-1/2  left-1/2">
            or
          </span>
        </div>
        <div className="mt-1">
          <button
            type="button"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-800 dark:hover:bg-indigo-700"
            onClick={() => verify()}
          >
            Login With Passkey 🔑
          </button>
        </div>
      </div>
    </div>
  );
};
