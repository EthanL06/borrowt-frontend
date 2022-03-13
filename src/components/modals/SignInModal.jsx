import React from "react";
import { useModalContext } from "../../contexts/ModalContextProvider";

import { ModalForm } from "./ModalForm";

export const SignInModal = () => {
  const { setModalType } = useModalContext();

  return (
    <ModalForm>
      <h3 className="text-xl font-medium text-gray-900 ">
        Sign in to{" "}
        <div className="inline-block select-none self-center whitespace-nowrap text-2xl font-semibold text-off-black">
          Borrow<span className="text-purple-500">T</span>
        </div>
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
          placeholder="name@email.com"
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
            <label htmlFor="remember" className="font-medium text-gray-900 ">
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
        <div
          onClick={() => setModalType("register")}
          className="inline-block cursor-pointer text-purple-700 hover:underline"
        >
          Create account
        </div>
      </div>
    </ModalForm>
  );
};
