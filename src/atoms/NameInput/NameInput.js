import { useState, useEffect } from "react";
import { getFormInputClassName } from "../../helpers";

export const NameInput = () => {
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

  return (
    <div className="control has-icons-right">
      <input
        className={ getFormInputClassName(nameError, name)}
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
  );
};