import { useContext } from "react";
import { LOGIN_PATH, REGISTER_PATH } from "../constants/routes";
import { AuthContext } from "../provides/AuthProviders";

export const Login = () => {
  const { loggedIn, logOut } = useContext(AuthContext);

  const renderGuestLinks = () => {
    return (
      <>
        <button
          className="button is-info mr-0 mb-0"
          to={ REGISTER_PATH }
          activeClassName="has-background-dark"
        >
          <strong>Register</strong>
        </button>
        <button
          className="button is-info is-align-self-stretch mr-0"
          to={ LOGIN_PATH }
          activeClassName="has-background-dark"
        >
          <strong>Log in</strong>
        </button>
      </>
    );
  };

  const renderUserLinks = () => {
    return (
      <button className="button is-info mr-0 mb-0" onClick={logOut}>
        <strong>Log Out</strong>
      </button>
    );
  };

  return (
    <div className="buttons is-flex-direction-column-reverse mb-0">
      { loggedIn ? renderUserLinks() : renderGuestLinks() }
    </div>
  );
};