import React, { useRef } from "react";

import { useAuthenticationContext } from "../../contexts/AuthenticationContextProvider";
import { useModalContext } from "../../contexts/ModalContextProvider";
import { Modal } from "./Modal";

export const ModalForm = ({ children }) => {
  const { login, register } = useAuthenticationContext();
  const { closeModal, modalType, setModalType } = useModalContext();
  const errorMsg = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    if (modalType === "signin") {
      const response = await login(email, password);

      if (!response) {
        errorMsg.current.classList.remove("hidden");
      } else {
        closeModal();
      }
    } else {
      const response = await register(email, password);

      if (!response) {
        // set innerhtml of errorMsg to "Email already exists"

        errorMsg.current.classList.remove("hidden");
      } else {
        closeModal();
      }

      register(email, password);
      setModalType("wallet");
    }
  };

  return (
    <Modal>
      <form
        className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
        method="POST"
        action="/"
        onSubmit={handleSubmit}
      >
        <p ref={errorMsg} className="hidden text-sm font-semibold text-red-500">
          <span className="text-xl font-bold">*</span>Failed to sign in user.{" "}
        </p>
        {children}
      </form>
    </Modal>
  );
};
