import React from "react";
import { useModalContext } from "../../contexts/ModalContextProvider";
import { ModalForm } from "./ModalForm";

export const RegisterModal = () => {
  const { setModalType } = useModalContext();

  return (
    <ModalForm>
      <h3 className="text-xl font-medium text-gray-900 ">
        Register with{" "}
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
      <button
        type="submit"
        className="w-full rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 "
      >
        Create account
      </button>
      <div className="text-sm font-medium text-gray-500 ">
        Have an account?{" "}
        <div
          onClick={() => setModalType("signin")}
          className="inline-block cursor-pointer text-purple-700 hover:underline"
        >
          Log in
        </div>
      </div>
    </ModalForm>
  );
};
