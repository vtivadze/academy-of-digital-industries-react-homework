import { useState, useEffect } from "react";
import { getFormInputClassName } from "../../helpers";

export const PasswordRepeatInput = () => {
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState(false);


  useEffect(() => {
    if (passwordRepeat && passwordRepeat.length < 6) {
      setPasswordRepeatError(true);
    } else if (passwordRepeat && passwordRepeat.length >= 6) {
      setPasswordRepeatError(false);
    }
  }, [passwordRepeat]);

  return (
    <div className="control has-icons-left has-icons-right">
      <input
        className={ getFormInputClassName(passwordRepeatError, passwordRepeat) }
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
  );
};