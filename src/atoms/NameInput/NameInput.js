import PropsType from 'prop-types';
import { useState, useEffect } from "react";
import { getFormInputClassName } from "../../helpers";
import { NAME_PATTERN } from "../../constants/validation";
import { NAME_MIN_LENGTH } from "../../constants/validation";
import { NAME_MAX_LENGTH } from "../../constants/validation";

export const NameInput = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  useEffect(({ name = "name"} ) => {
    if (name &&
        (
          !name.match(NAME_PATTERN) ||
          name.length < NAME_MIN_LENGTH ||
          name.length > NAME_MAX_LENGTH
        )
    ) {
      setNameError(true);
    } else if (
        name &&
        name.match(NAME_PATTERN) &&
        name.length >= NAME_MIN_LENGTH &&
        name.length <= NAME_MAX_LENGTH
    ) {
      setNameError(false);
    }
  }, [name]);

  return (
    <div className="control has-icons-right">
      <input
        className={ getFormInputClassName(nameError, name)}
        type="text"
        name={ name }
        value={name}
        placeholder="Firstname LastName"
        required
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
  );
};

NameInput.defaultProps = {
  name: "name",
};

NameInput.propsType = {
  name: PropsType.string.isRequired,
};