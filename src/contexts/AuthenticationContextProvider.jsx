import React, { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = (email, password) => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => {
  return useContext(AuthenticationContext);
};
