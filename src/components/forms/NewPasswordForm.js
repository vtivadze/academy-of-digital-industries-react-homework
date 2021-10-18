import { useState, useEffect } from "react";

export const NewPasswordForm = (props) => {

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState(false);

  useEffect(() => {
    if (password && password.length < 8) {
      setPasswordError(true);
    } else if (password && password.length >= 8) {
      setPasswordError(false);
    }

    if (password && passwordRepeat && passwordRepeat !== password) {
      setPasswordRepeatError(true);
    } else if (password && passwordRepeat && passwordRepeat === password) {
      setPasswordRepeatError(false);
    }
  }, [passwordRepeat, password]);

  const getClassName = (error, input) => {
    let className = "input";

    if (input && error) {
      className += " is-danger";  
    } else if (input && !error) {
      className += " is-success";
    }

    return className;
  }
  
  const onSubmit = event => event.preventDefault();

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={ onSubmit }
    >
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className={ getClassName(passwordError, password) }
            type="password"
            name="password"
            value={ password }
            autoComplete="new-password"
            placeholder="Password"
            onChange={ ({target}) => setPassword(target.value) }
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
          {password && !passwordError && <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>}
          {password && passwordError &&
          <>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
            <p className="help is-danger">This password is invalid</p>
          </>
          }
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className={ getClassName(passwordRepeatError, passwordRepeat) }
            type="password"
            name="passwordRepeat"
            value={ passwordRepeat }
            autoComplete="new-password"
            placeholder="Repeat password"
            onChange={ ({target}) => setPasswordRepeat(target.value) }
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
          {passwordRepeat && !passwordRepeatError && <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>}
          {passwordRepeat && passwordRepeatError &&
          <>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
            <p className="help is-danger">The passwords are not matching</p>
          </>
          }
        </div>
      </div>

      <div className="field">
        <p className="control">
          <button className="button is-success">Set new password</button>
        </p>
      </div>
    </form>
  );
};
