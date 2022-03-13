import React from "react";
import { ModalForm } from "./ModalForm";
import { Button } from "../Button";
import { useAuthenticationContext } from "../../contexts/AuthenticationContextProvider";
import { useModalContext } from "../../contexts/ModalContextProvider";

export const MintNFTModal = () => {
  const { hasConnectedWallet } = useAuthenticationContext();
  const { setModalType } = useModalContext();

  if (!hasConnectedWallet) {
    return (
      <ModalForm>
        <h3 className="text-xl font-semibold text-gray-900 ">Mint NFT</h3>
        <p className="text-sm text-gray-500">Wallet must be connected.</p>
        <button
          onClick={() => {
            setModalType("wallet");
          }}
          className="w-full rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 "
        >
          Connect Wallet
        </button>
      </ModalForm>
    );
  }
  return (
    <ModalForm>
      <h3 className="text-xl font-semibold text-gray-900 ">Mint NFT</h3>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900 ">
          User Secret
        </label>
        <input
          type="text"
          name="user_secret"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          autoComplete="none"
          required
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900 ">
          Issuer Public Key
        </label>
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900 ">
          IPFS Hash
        </label>
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 "
      >
        Mint
      </button>
    </ModalForm>
  );
};
