import { useEffect, useState } from "react";

export const CheckEmailForm = (props) => {
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

  const getClassName = (error, input) => {
    let className = "input";

    if (input && error) {
      className += " is-danger";
    } else if (input && !error) {
      className += " is-success";
    }

    return className;
  };

  return (
    <form className="box column is-half is-offset-one-quarter mt-6">
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className={ getClassName(emailError, email)}
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

      <div className="field tile is-justify-content-space-between">
        <p className="control">
          <button className="button is-success">Check Email</button>
        </p>
      </div>
    </form>
  );
};
