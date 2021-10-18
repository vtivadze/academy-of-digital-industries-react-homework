import { useState, useEffect } from "react";

export const SignupForm = (props) => {

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    const namePattern = /^[a-z]{2,20}\s+[a-z]{2,30}$/im;

    if (name && !name.match(namePattern)) {
      setNameError(true);
    } else if (name && name.match(namePattern)) {
      setNameError(false);
    }
  }, [name]);

  const[userName, setUserName] = useState("");
  const[userNameError, setUserNameError] = useState(false);

  useEffect(() => {
    if (userName && userName.length < 5) {
      setUserNameError(true);
    } else if (userName && userName.length >= 5) {
      setUserNameError(false);
    }
  }, [userName]);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    const emailPattern = /^[a-z]+[0-9]*[a-z]+@[a-z]{2,}\.[a-z]{2,3}$/im;
    
    if (email && !email.match(emailPattern)) {
      setEmailError(true);
    } else if (email && email.match(emailPattern)) {
      setEmailError(false);
    }
  }, [email]);

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
  }, [password, passwordRepeat]);

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
        <div className="control has-icons-right">
          <input
            className={ getClassName(nameError, name)}
            type="text"
            name="name"
            value={name}
            placeholder="Firstname LastName"
            onChange={({target}) => setName(target.value)}
          />

          {name && !nameError && <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>}
          {name && nameError &&
          <>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
            <p className="help is-danger">This name is invalid</p>
          </>
          }
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className={ getClassName(userNameError, userName) }
            type="text"
            name="username"
            value={ userName }
            autoComplete="username"
            placeholder="User name"
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
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className={ getClassName(emailError, email) }
            type="email"
            name="email"
            value={ email }
            autoComplete="email"
            placeholder="Email"
            onChange={ ({target}) => setEmail(target.value) }
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          {email && !emailError && <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>}
          {email && emailError &&
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
          <button className="button is-success">Sign up</button>
        </p>
      </div>
    </form>
  );
};
