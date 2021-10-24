import { useContext } from "react";
import { Redirect } from "react-router";
import { ACCESS_IS_DENIED_PATH } from "../../constants/routes";
import { AuthContext } from "../../providers/AuthProvider";

export const SecureComponent = ({ Page, ...props }) => {
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? <Page {...props} /> : <Redirect to={ ACCESS_IS_DENIED_PATH } />;
};