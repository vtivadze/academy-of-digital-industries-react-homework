import { useState } from 'react';

export const SelectInput = ({
  inputName,
  options,
  selectedItem = 0,
  updateLocalStorage = null,
}) => {
  const [selected, setSelected] = useState(selectedItem);
  const onChangeHandler = ({ target }) => {
    setSelected(target.value);
    if (updateLocalStorage instanceof Function) {
      updateLocalStorage(target.value);
    }
  };

  return (
    <div className="control select">
      <select name={inputName} onChange={onChangeHandler} value={selected}>
        {options.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
