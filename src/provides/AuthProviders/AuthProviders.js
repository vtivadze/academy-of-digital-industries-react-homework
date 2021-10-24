import React from "react";
import { useState } from "react";
import { AUTH_TOKEN } from "../../constants/constants";
import { itemExists, removeItem } from "../../helpers/localStorage";

const AuthContext = React.createContext(null);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(() => itemExists(AUTH_TOKEN));

  const logOut = () => {
    removeItem(AUTH_TOKEN);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{loggedIn, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};