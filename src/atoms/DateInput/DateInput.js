import PropTypes from 'prop-types';
import { useState } from 'react';
import "./BulmaCalendar.min.css";

export const DateInput = ({ inputName = 'date', value = '' }) => {
  const [date, setDate] = useState('');

  return (
    <div className="control has-icons-left has-icons-right">
      <input
        className="datetimepicker-dummy-inut"
        name={inputName}
        value={date ? date : value}
        type="text"
        placeholder
        required
        onChange={({ target }) => setDate(target.value)}
      />

      <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
      </span>
      
      
    </div>
  );
};

DateInput.defaultProps = {
  inputName: 'date',
};

DateInput.propTypes = {
  inputName: PropTypes.string.isRequired,
};
