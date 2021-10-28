import { useState } from "react";
import { getItem, saveItem } from "../helpers/localStorage";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = getItem(key);
      return value ? value : initialValue;
    }
    catch(error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (newValue) => {
    try {
      const valueToSet =
        newValue instanceof Function
        ? newValue(storedValue)
        : newValue;

      setStoredValue(valueToSet);
      saveItem(key, valueToSet);
    }
    catch(error) {

    }
  };

  return [storedValue, setValue];
};
