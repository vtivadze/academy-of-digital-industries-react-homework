import { Redirect } from "react-router";
import { ACCESS_IS_DENIED_PATH } from "../../constants/routes";
import { AUTH_TOKEN } from "../../constants/constants";
import { itemExists } from "../../helpers/localStorage";

export const SecureComponent = ({ Page, ...props }) => {
  const loggedIn = itemExists(AUTH_TOKEN);

  return loggedIn ? <Page {...props} /> : <Redirect to={ ACCESS_IS_DENIED_PATH } />;
};