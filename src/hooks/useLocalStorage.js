import { useEffect, useState } from 'react';

const KEY = 'key';

const getValueStorage = (key, initialState) => {
  const saveValue = JSON.parse(localStorage.getItem(key));

  if (saveValue) {
    return saveValue;
  }

  if (initialState instanceof Function) {
    return initialState;
  }

  return initialState;
};

export function useLocalStorage() {
  const [token, setToken] = useState(() => getValueStorage(KEY, ''));

  const setItem = (value) => {
    setToken(value);
  };

  const removeItem = () => {
    localStorage.removeItem(KEY);
    setToken('');
  };

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(token));
  }, [token]);

  return [token, { setItem, removeItem }];
}
