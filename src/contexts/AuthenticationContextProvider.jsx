import React, { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged_in"))
  );

  const register = (email, password) => {
    console.log("register");
    localStorage.setItem("logged_in", JSON.stringify(true));
    setLoggedIn(true);
  };

  const login = (email, password) => {
    console.log("login");
    localStorage.setItem("logged_in", JSON.stringify(true));
    setLoggedIn(true);
  };

  const logout = () => {
    console.log("logout");
    localStorage.setItem("logged_in", JSON.stringify(false));
    setLoggedIn(false);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => {
  return useContext(AuthenticationContext);
};
