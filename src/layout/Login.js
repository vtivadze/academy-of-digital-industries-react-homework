import { Link } from "react-router-dom";
import { LOGIN_PATH, REGISTER_PATH } from "../constants/routes";
export const Login = (props) => {
  const clickHandler = (itemName) => {
    return props.customButtonClickHandler(itemName);
  }

  return (
    <div className="buttons is-flex-direction-column-reverse mb-0">
      <Link
        className="button is-primary mr-0 mb-0"
        onClick={clickHandler.bind(null, "RegisterForm")}
        to={ REGISTER_PATH }
      >
        <strong>Register</strong>
      </Link>
      <Link
        className="button is-light is-align-self-stretch mr-0"
        onClick={clickHandler.bind(null, "LoginForm")}
        to={ LOGIN_PATH }
      >
        Log in
      </Link>
    </div>
  );
};