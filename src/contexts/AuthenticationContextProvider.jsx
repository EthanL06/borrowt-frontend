import React, { createContext, useContext, useState } from "react";

import { createUser, signIn } from "../utils/firebase";

const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged_in"))
  );

  const [hasConnectedWallet, setConnectedWallet] = useState(false);
  sessionStorage.getItem("connected_wallet", JSON.stringify(false));

  const register = async (email, password) => {
    console.log("register");

    const response = await createUser(email, password);

    if (!response) {
      console.log("false");
      localStorage.setItem("logged_in", JSON.stringify(false));
      setLoggedIn(false);
      return false;
    }

    console.log("true");
    localStorage.setItem("logged_in", JSON.stringify(true));
    setLoggedIn(true);
    return true;
  };

  const login = async (email, password) => {
    console.log("login");

    const response = await signIn(email, password);
    if (!response) {
      console.log("false");
      localStorage.setItem("logged_in", JSON.stringify(false));
      setLoggedIn(false);
      return false;
    }

    console.log("true");
    localStorage.setItem("logged_in", JSON.stringify(true));
    setLoggedIn(true);
    return true;
  };

  const logout = () => {
    console.log("logout");
    localStorage.setItem("logged_in", JSON.stringify(false));
    sessionStorage.setItem("connected_wallet", JSON.stringify(false));
    sessionStorage.setItem("public_key", "");
    setLoggedIn(false);
  };

  const connectWallet = () => {
    console.log("connectWallet");
    sessionStorage.setItem("connected_wallet", JSON.stringify(true));
    setConnectedWallet(true);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        register,
        hasConnectedWallet,
        connectWallet,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => {
  return useContext(AuthenticationContext);
};
