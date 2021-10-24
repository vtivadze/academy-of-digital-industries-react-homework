import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

import { AUTH_TOKEN } from "../../constants/constants";
import { itemExists, removeItem, saveItem } from "../../helpers/localStorage";
import { PROFILE_PATH } from "../../constants/routes";

export const AuthContext = React.createContext(null);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(() => itemExists(AUTH_TOKEN));
  const history = useHistory();

  const logOut = () => {
    removeItem(AUTH_TOKEN);
    setLoggedIn(false);
  };

  const logIn = (token) => {
    saveItem(AUTH_TOKEN, token);
    setLoggedIn(true);
    history.replace(PROFILE_PATH)
  };

  return (
    <AuthContext.Provider value={{loggedIn, logOut, logIn}}>
      {children}
    </AuthContext.Provider>
  );
};