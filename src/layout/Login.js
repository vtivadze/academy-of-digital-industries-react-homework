import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_PATH, REGISTER_PATH } from "../constants/routes";
import { AuthContext } from "../providers/AuthProvider";

export const Login = () => {
  const { loggedIn, logOut } = useContext(AuthContext);

  const renderGuestLinks = () => {
    return (
      <>
        <NavLink
          className="button is-info mr-0 mb-0"
          to={ REGISTER_PATH }
          activeClassName="has-background-dark"
        >
          <strong>Register</strong>
        </NavLink>
        <NavLink
          className="button is-info is-align-self-stretch mr-0"
          to={ LOGIN_PATH }
          activeClassName="has-background-dark"
        >
          <strong>Log in</strong>
        </NavLink>
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