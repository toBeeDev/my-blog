"use client";
import { useEffect, useState } from "react";

const useDebounce = (value: string, time: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(handler);
      setDebounceValue("");
    };
  }, [value, time]);
  return debounceValue;
};

export default useDebounce;
