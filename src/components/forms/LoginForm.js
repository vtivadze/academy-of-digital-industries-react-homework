import { NavLink } from "react-router-dom";
import { EmailInput } from "../../atoms/EmailInput/EmailInput";
import { PasswordInput } from "../../atoms/PasswordInput/PasswordInput";
import { CHECK_EMAIL_PATH } from "../../constants/routes";

export const LoginForm = () => {
  const onSubmit = event => {
    event.preventDefault();

    const loginData = {};
    const fd = new FormData(event.target);

    for (let [key, value] of fd.entries()) {
      loginData[key] = value;
    }

    console.log(loginData);
    console.log(process.env.REACT_APP_API_URL);
  }

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={onSubmit}  
    >
      <div className="field">
        <EmailInput inputName="email" />
      </div>

      <div className="field">
        <PasswordInput inputName="password" />
      </div>

      <div className="field tile is-justify-content-space-between">
        <p className="control">
          <button className="button is-success">Log in</button>
        </p>
        <p className="control">
          <NavLink
            className="button is-ghost"
            to={ CHECK_EMAIL_PATH }
          >
            Forgot password?
          </NavLink>
        </p>
      </div>
    </form>
  );
};
