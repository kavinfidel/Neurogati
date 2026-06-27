import { useEffect, useState } from "react";

/*
  useLocalStorage behaves like useState, but it also remembers the value
  after the page refreshes by saving it in the browser.
*/
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = window.localStorage.getItem(key);

    if (savedValue) {
      return JSON.parse(savedValue);
    }

    return initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
