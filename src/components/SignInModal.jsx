import React, { useEffect, useRef } from "react";
import { useAuthenticationContext } from "../contexts/AuthenticationContextProvider";

export const SignInModal = ({ closeModal }) => {
  const modal = useRef(null);
  const { login } = useAuthenticationContext();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (!modal.current.contains(event.target)) {
      closeModal();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    login(email, password);
    closeModal();
  };

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="modal fixed top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-70 md:inset-0 md:h-full"
    >
      <div className="relative top-5 h-auto w-full max-w-md px-4" ref={modal}>
        <div className="relative rounded-lg bg-white shadow ">
          <div className="flex justify-end p-2">
            <button
              type="button"
              onClick={closeModal}
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
              data-modal-toggle="authentication-modal"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <form
            className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
            method="POST"
            action="/"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-medium text-gray-900 ">
              Sign in to our platform
            </h3>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="name@company.com"
                autoComplete="none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 "
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-900 "
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a href="/" className="text-sm text-purple-700 hover:underline ">
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 "
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 ">
              Not registered?{" "}
              <a href="/" className="text-purple-700 hover:underline ">
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
