import React, { useEffect } from "react";
import { Button } from "./Button";
import { useModalContext } from "../contexts/ModalContextProvider";

export const LoggedOutNavbar = ({ show }) => {
  const { openModal } = useModalContext();
  useEffect(() => {
    const signin = document.querySelector("#sign-in");
    signin.classList.toggle("hidden");
  }, [show]);

  const handleButtonClick = () => {
    openModal();
  };

  return (
    <div
      id="sign-in"
      className="mt-5 flex w-full items-center justify-center md:mt-0 md:block md:w-auto"
    >
      <Button text={"Sign in"} color={"#a855f7"} handler={handleButtonClick} />
    </div>
  );
};
