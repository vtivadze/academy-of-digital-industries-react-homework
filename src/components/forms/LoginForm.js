import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { EmailInput } from "../../atoms/EmailInput/EmailInput";
import { PasswordInput } from "../../atoms/PasswordInput/PasswordInput";
import { CHECK_EMAIL_PATH, PROFILE_PATH } from "../../constants/routes";

export const LoginForm = () => {
  const history = useHistory();

  const onSubmit = event => {
    event.preventDefault();

    const loginData = {};
    const fd = new FormData(event.target);

    for (let [key, value] of fd.entries()) {
      loginData[key] = value;
    }

    // console.log(loginData);
    // console.log(process.env.REACT_APP_API_URL);

    fetch ( `${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(result => {
        if (result.token) {
          history.replace(PROFILE_PATH)
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={onSubmit}  
    >
      <div className="field">
        <EmailInput inputName="email" value="eve.holt@reqres.in" />
      </div>

      <div className="field">
        <PasswordInput inputName="password" value="cityslicka" />
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
