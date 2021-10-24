import { NavLink } from "react-router-dom";
import { LOGIN_PATH, REGISTER_PATH } from "../constants/routes";
export const Login = (props) => {

  return (
    <div className="buttons is-flex-direction-column-reverse mb-0">
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
    </div>
  );
};