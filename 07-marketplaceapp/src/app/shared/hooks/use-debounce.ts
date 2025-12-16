import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay = 600) => {
  const [debouncedValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};
