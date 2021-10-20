import { useState, useEffect } from "react";
import { getFormInputClassName } from "../../helpers";
import { MIN_EMAIL_VALUE } from "../../constants/validation";
import { EMAIL_PATTERN } from "../../constants/validation";

export const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (
        (email && !email.match(EMAIL_PATTERN)) ||
        (email && email.length < MIN_EMAIL_VALUE) 
    ) {
      setEmailError(true);
    } else if (
      (email && email.match(EMAIL_PATTERN)) ||
      (email && email.length >= MIN_EMAIL_VALUE)
    ) {
      setEmailError(false);
    }
  }, [email]);

  return (
    <div className="control has-icons-left has-icons-right">
      <input
        className={getFormInputClassName(emailError, email)}
        name="email"
        value={email}
        type="email"
        placeholder="Email"
        autoComplete="email"
        required
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
  );
};