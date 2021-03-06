import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../providers/AuthProvider';
import { EmailInput, PasswordInput } from '../../atoms';
import { CHECK_EMAIL_PATH } from '../../constants/routes';

export const LoginForm = () => {
  const { logIn } = useContext(AuthContext);

  const onSubmit = event => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    for (let [key, value] of fd.entries()) {
      loginData[key] = value;
    }

    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(result => {
        if (result.token) {
          logIn(result.token);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={onSubmit}>
      <h1 className="title has-text-centered">Login</h1>

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
          <NavLink className="button is-ghost" to={CHECK_EMAIL_PATH}>
            Forgot password?
          </NavLink>
        </p>
      </div>
    </form>
  );
};
