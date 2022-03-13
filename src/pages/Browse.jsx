import React, { useEffect } from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContextProvider";
import { useModalContext } from "../contexts/ModalContextProvider";

import { NFTCard } from "../components/NFTCard";
import { SignInModal } from "../components/modals/SignInModal";
import { RegisterModal } from "../components/modals/RegisterModal";
import { WalletModal } from "../components/modals/WalletModal";

export const Browse = () => {
  const { isModalOpen, modalType } = useModalContext();
  const { isLoggedIn } = useAuthenticationContext();

  const renderModal = () => {
    switch (modalType) {
      case "signin":
        return <SignInModal />;
      case "register":
        return <RegisterModal />;
      case "wallet":
        return <WalletModal />;
      default:
        return null;
    }
  };

  return (
    <div>
      {isModalOpen ? renderModal() : null}

      <div className="mx-5 flex select-none flex-col items-center justify-center lg:ml-12">
        <div className="mt-10 mb-5 flex w-full text-left text-5xl font-bold ">
          Browse&nbsp;
          <div className="flex flex-col">
            <span className="bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text font-extrabold text-transparent">
              NFTS
            </span>
            <div className="w-24 border-b-4 border-purple-600"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-y-6 gap-x-4">
          {[...Array(50)].map((x, i) => (
            <NFTCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
