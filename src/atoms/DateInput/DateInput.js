import { PropTypes } from 'prop-types';
import { useState } from 'react';

export const DateInput = ({
  inputName = 'date',
  value = '',
  updateLocalStorage = null,
}) => {
  const [date, setDate] = useState(value);

  const onChangeHandler = ({ target }) => {
    setDate(target.value);
    if (updateLocalStorage instanceof Function) {
      updateLocalStorage(target.value);
    }
  };

  return (
    <div className="control">
      <input
        className=""
        name={inputName}
        value={date ? date : value}
        type="date"
        onChange={onChangeHandler}
      />
    </div>
  );
};

DateInput.defaultProps = {
  inputName: 'date',
};

DateInput.propTypes = {
  inputName: PropTypes.string.isRequired,
};
