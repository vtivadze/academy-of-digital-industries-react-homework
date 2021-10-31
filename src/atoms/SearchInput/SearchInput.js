import PropsType from 'prop-types';
import { useState } from 'react';

export const SearchInput = ({ inputName = 'search' }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="control has-icons-right">
      <input
        className="input"
        type="text"
        name={inputName}
        value={search}
        placeholder="Firstname LastName"
        required
        onChange={({ target }) => setSearch(target.value)}
      />
    </div>
  );
};

SearchInput.defaultProps = {
  inputName: 'search',
};

SearchInput.propsType = {
  inputName: PropsType.string.isRequired,
};
