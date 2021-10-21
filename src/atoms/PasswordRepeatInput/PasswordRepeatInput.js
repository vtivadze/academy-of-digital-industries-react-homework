import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { getFormInputClassName } from "../../helpers";
import { PASSWORD_MIN_LENGTH } from "../../constants/validation";
import { PASSWORD_MAX_LENGTH } from "../../constants/validation";

export const PasswordRepeatInput = ({ inputName = "passwordRepeat" }) => {
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState(false);

  useEffect(() => {
    if (passwordRepeat &&
      (
        passwordRepeat.length < PASSWORD_MIN_LENGTH ||
        passwordRepeat.length > PASSWORD_MAX_LENGTH
      )
    ) {
      setPasswordRepeatError(true);
    } else if (
        passwordRepeat &&
        passwordRepeat.length >= PASSWORD_MIN_LENGTH &&
        passwordRepeat.length <= PASSWORD_MAX_LENGTH
      ) {
      setPasswordRepeatError(false);
    }
  }, [passwordRepeat]);

  return (
    <div className="control has-icons-left has-icons-right">
      <input
        className={ getFormInputClassName(passwordRepeatError, passwordRepeat) }
        type="password"
        name={ inputName }
        value={ passwordRepeat }
        autoComplete="new-password"
        placeholder="Repeat password"
        required
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

PasswordRepeatInput.defaultProps = {
  inputName: "passwordRepeat",
};

PasswordRepeatInput.propTypes = {
  inputName: PropTypes.string.isRequired,
};

