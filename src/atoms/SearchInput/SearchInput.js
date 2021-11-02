import PropsType from 'prop-types';
import { useState } from 'react';

export const SearchInput = ({ inputName = 'search', value = '', updateLocalStorage = null }) => {
  const [search, setSearch] = useState(value);

  const onChangeHandler = ({ target }) => {
    setSearch(target.value);
    if (updateLocalStorage instanceof Function) {
      updateLocalStorage(target.value);
    }
  };

  return (
    <div className="control has-icons-right">
      <input
        className="input"
        type="text"
        name={inputName}
        value={search}
        placeholder="Firstname LastName"
        onChange={ onChangeHandler }
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
