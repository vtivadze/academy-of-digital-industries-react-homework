import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getFormInputClassName } from '../../helpers';
import { USERNAME_PATTERN } from '../../constants/validation';
import { USERNAME_MIN_LENGTH } from '../../constants/validation';
import { USERNAME_MAX_LENGTH } from '../../constants/validation';

export const UsernameInput = ({ inputName = 'username' }) => {
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);

  useEffect(() => {
    if (
      userName &&
      (!userName.match(USERNAME_PATTERN) ||
        userName.length < USERNAME_MIN_LENGTH ||
        userName.length > USERNAME_MAX_LENGTH)
    ) {
      setUserNameError(true);
    } else if (
      userName &&
      userName.length >= USERNAME_MIN_LENGTH &&
      userName.length <= USERNAME_MAX_LENGTH
    ) {
      setUserNameError(false);
    }
  }, [userName]);

  return (
    <div className="control has-icons-left has-icons-right">
      <input
        className={getFormInputClassName(userNameError, userName)}
        type="text"
        name={inputName}
        value={userName}
        autoComplete="username"
        placeholder="Username"
        required
        onChange={({ target }) => setUserName(target.value)}
      />
      <span className="icon is-small is-left">
        <i className="fas fa-user"></i>
      </span>
      {userName && !userNameError && (
        <>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
          <p className="help is-success">This username is available</p>
        </>
      )}
      {userName && userNameError && (
        <>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
          <p className="help is-danger">This username is invalid</p>
        </>
      )}
    </div>
  );
};

UsernameInput.defaultProps = {
  inputName: 'username',
};

UsernameInput.propTypes = {
  inputName: PropTypes.string.isRequired,
};
