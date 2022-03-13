import React from "react";

import { useAuthenticationContext } from "../../contexts/AuthenticationContextProvider";
import { useModalContext } from "../../contexts/ModalContextProvider";
import { Modal } from "./Modal";

export const ModalForm = ({ children }) => {
  const { login, register } = useAuthenticationContext();
  const { closeModal, modalType, setModalType } = useModalContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    if (modalType === "signin") {
      login(email, password);
      closeModal();
    } else {
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
        {children}
      </form>
    </Modal>
  );
};
