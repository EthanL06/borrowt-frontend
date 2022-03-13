import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useModalContext } from "../contexts/ModalContextProvider";
import { SignInModal } from "../components/modals/SignInModal";
import { RegisterModal } from "../components/modals/RegisterModal";
import { WalletModal } from "../components/modals/WalletModal";
import { Navbar } from "../components/navbars/Navbar";
import { NFTInfo } from "./NFTInfo";
import { Browse } from "./Browse";
import { MintNFTModal } from "../components/modals/MintNFTModal";

export const AllRoutes = () => {
  const { isModalOpen, modalType } = useModalContext();

  const renderModal = () => {
    console.log("render");
    switch (modalType) {
      case "signin":
        return <SignInModal />;
      case "register":
        return <RegisterModal />;
      case "wallet":
        return <WalletModal />;
      case "mint":
        return <MintNFTModal />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />

      {isModalOpen ? renderModal() : null}
      <Routes>
        <Route path="/NFT" element={<NFTInfo />} />
        <Route path="/" element={<Browse />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
};
