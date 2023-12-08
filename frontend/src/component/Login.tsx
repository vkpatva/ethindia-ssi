import { Field, Form } from "react-final-form";

type RegisterForm = {
  username: string;
};
export const Login = () => {
  const onSubmit = (values: RegisterForm) => {
    console.log(values);
    return;
  };
  const validate = (values: RegisterForm) => {
    const errors: Partial<RegisterForm> = {};
    if (!values.username) {
      errors.username = "Required";
    }
    return errors;
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-[80px] w-auto"
          src="public/images/smartsense-logo.png"
          alt="Smart Sense"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
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
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Username 🧑‍💻
                      </label>
                      <div className="mt">
                        <input
                          id="username"
                          type="username"
                          placeholder="Enter your Username "
                          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Passkey 🔐
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};
