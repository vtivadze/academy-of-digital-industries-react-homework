import PropTypes from 'prop-types';
import { useState } from 'react';

export const DateInput = ({ inputName = 'date', value = '' }) => {
  const [date, setDate] = useState('');

  return (
    <div className="control">
      <input
        className=""
        name={inputName}
        value={date ? date : value}
        type="date"
        onChange={({ target }) => setDate(target.value)}
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
