import React, { useRef } from "react";
import {
  isConnected,
  getPublicKey,
  signTransaction,
} from "@stellar/freighter-api";
import { useModalContext } from "../../contexts/ModalContextProvider";
import { Modal } from "./Modal";
import FreighterLogo from "../../assets/freighter_logo.png";
import { useAuthenticationContext } from "../../contexts/AuthenticationContextProvider";

export const WalletModal = () => {
  const errorMsg = useRef(null);
  const { closeModal } = useModalContext();
  const { connectWallet } = useAuthenticationContext();

  const retrievePublicKey = async () => {
    let publicKey;

    try {
      const network = await retrieveNetwork();

      if (network === false) {
        throw new Error("No network");
      }

      publicKey = await getPublicKey();

      sessionStorage.setItem("public_key", publicKey);

      if (publicKey === "") {
        throw new Error("No public key");
      }

      connectWallet();
      closeModal();
    } catch (error) {
      errorMsg.current.classList.remove("hidden");
      console.log(error);
    }

    return publicKey;
  };

  const retrieveNetwork = async () => {
    let network = null;

    try {
      network = await isConnected();
    } catch (e) {
      return e;
    }

    return network;
  };

  return (
    <Modal>
      <div className="flex items-center justify-between rounded-t border-b py-4 px-6 dark:border-gray-600">
        <h3 className=" text-xl font-semibold text-gray-900 dark:text-white">
          Connect wallet to account
        </h3>
      </div>
      <div className="p-6">
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Connect your wallet using the Freighter extension.
        </p>
        <p ref={errorMsg} className="hidden text-sm font-semibold text-red-500">
          <span className="text-xl font-bold">*</span> Must have extension
          installed. Get it{" "}
          <a
            className="underline hover:font-bold"
            href="https://chrome.google.com/webstore/detail/freighter/bcacfldlkkdogcmkkibnjlakofdplcbk?hl=en"
          >
            here.
          </a>
        </p>
        <ul className="my-4 space-y-3">
          <li>
            <div
              onClick={retrievePublicKey}
              className="group flex cursor-pointer items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              <img
                src={FreighterLogo}
                className="h-8 w-8"
                alt="Freighter Logo"
              />
              <span className="ml-3 flex-1 whitespace-nowrap text-[#120277]">
                Freighter
              </span>
              <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                Extension
              </span>
            </div>
          </li>
        </ul>
      </div>
    </Modal>
  );
};
