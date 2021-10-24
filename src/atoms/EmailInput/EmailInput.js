import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { getFormInputClassName } from "../../helpers";
import { EMAIL_MIN_LENGTH } from "../../constants/validation";
import { EMAIL_MAX_LENGTH } from "../../constants/validation";
import { EMAIL_PATTERN } from "../../constants/validation";

export const EmailInput = ({ inputName="email", value="" }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (email &&
        (
          !email.match(EMAIL_PATTERN) ||
          email.length < EMAIL_MIN_LENGTH ||
          email.length > EMAIL_MAX_LENGTH
        )
    ) {
      setEmailError(true);
    } else if (
        email &&
        email.match(EMAIL_PATTERN) &&
        email.length >= EMAIL_MIN_LENGTH &&
        email.length <= EMAIL_MAX_LENGTH
    ) {
      setEmailError(false);
    }
  }, [email]);

  return (
    <div className="control has-icons-left has-icons-right">
      <input
        className={getFormInputClassName(emailError, email)}
        name={ inputName }
        value={email ? email : value}
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

EmailInput.defaultProps = {
  inputName: "email",
}

EmailInput.propTypes = {
  inputName: PropTypes.string.isRequired,
}