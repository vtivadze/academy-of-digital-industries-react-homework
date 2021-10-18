import { useState, useEffect } from "react";

export const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (email && email.length < 8) {
      setEmailError(true);
    } else if (email && email.length >= 8) {
      setEmailError(false);
    }
  }, [email]);

  useEffect(() => {
    if (password && password.length < 6) {
      setPasswordError(true);
    } else if (password && password.length >= 6) {
      setPasswordError(false);
    }
  }, [password]);

  const getClassName = (error, input) => {
    let className = "input";

    if (error && input) {
      className += " is-danger";
    } else if (!error && input) {
      className += " is-success";
    }

    return className;
  }

  const onSubmit = event => {
    event.preventDefault();
    
    // const loginData = {
    //   email, password
    // };
  }

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={onSubmit}  
    >
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className={getClassName(emailError, email)}
            name="email"
            value={email}
            type="email"
            placeholder="Email"
            autoComplete="email"
            onChange={({target}) => setEmail(target.value) }
          />

          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          {!emailError && email && <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>}
          {emailError && email && 
            <>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
              <p className="help is-danger">This email is invalid</p>
            </>
          }
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className={getClassName(passwordError, password)}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={({target}) => setPassword(target.value)}
          />

          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
          {!passwordError && password && <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>}
          {passwordError && password && 
            <>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
              <p className="help is-danger">This password is invalid</p>
            </>
          }
        </div>
      </div>

      <div className="field tile is-justify-content-space-between">
        <p className="control">
          <button className="button is-success">Log in</button>
        </p>
        <p className="control">
          <button className="button is-ghost">Forgot password?</button>
        </p>
      </div>
    </form>
  );
};
