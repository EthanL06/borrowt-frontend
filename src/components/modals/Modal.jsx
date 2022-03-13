import React, { useEffect, useRef } from "react";
import { useModalContext } from "../../contexts/ModalContextProvider";

export const Modal = ({ children }) => {
  const { closeModal } = useModalContext();
  const modal = useRef(null);

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

  return (
    <div
      aria-hidden="true"
      className="modal fixed top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-70 md:inset-0 md:h-full"
    >
      <div className="relative top-5 h-auto w-full max-w-md px-4" ref={modal}>
        <div className="relative rounded-lg bg-white shadow ">
          {" "}
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
          {children}
        </div>
      </div>
    </div>
  );
};
