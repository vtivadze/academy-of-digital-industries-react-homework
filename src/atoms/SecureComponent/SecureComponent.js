import { Redirect } from "react-router";
import { ACCESS_IS_DENIED_PATH } from "../../constants/routes";

export const SecureComponent = ({ Page, ...props }) => {
  const loggedIn = true;

  return loggedIn ? <Page {...props} /> : <Redirect to={ ACCESS_IS_DENIED_PATH } />;
};