import { useState, useEffect } from "react";
import { getFormInputClassName } from "../../helpers";

export const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (password && password.length < 6) {
      setPasswordError(true);
    } else if (password && password.length >= 6) {
      setPasswordError(false);
    }
  }, [password]);

  return (
    <div className="control has-icons-left has-icons-right">
      <input
        className={getFormInputClassName(passwordError, password)}
        name="password"
        value={password}
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        required
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
  );
};