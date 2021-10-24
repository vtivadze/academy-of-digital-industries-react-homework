import { Redirect } from "react-router";
import { ACCESS_IS_DENIED_PATH } from "../../constants/routes";

export const SecureComponent = ({ children }) => {
  const loggedIn = false;

  return loggedIn ? children : <Redirect to={ ACCESS_IS_DENIED_PATH } />;
};