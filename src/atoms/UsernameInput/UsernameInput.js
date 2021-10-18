import { useState, useEffect } from "react";
import { getFormInputClassName } from "../../helpers";

export const UsernameInput = () => {
  const[userName, setUserName] = useState("");
  const[userNameError, setUserNameError] = useState(false);

  useEffect(() => {
    if (userName && userName.length < 5) {
      setUserNameError(true);
    } else if (userName && userName.length >= 5) {
      setUserNameError(false);
    }
  }, [userName]);

  return (
    <div className="control has-icons-left has-icons-right">
      <input
        className={ getFormInputClassName(userNameError, userName) }
        type="text"
        name="username"
        value={ userName }
        autoComplete="username"
        placeholder="Username"
        onChange={ ({target}) => setUserName(target.value) }
      />
      <span className="icon is-small is-left">
        <i className="fas fa-user"></i>
      </span>
      {userName && !userNameError &&
        <>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
          <p className="help is-success">This username is available</p>
        </>
      }
      {userName && userNameError &&
      <>
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle"></i>
        </span>
        <p className="help is-danger">This username is invalid</p>
      </>
      }
    </div>
  );
};