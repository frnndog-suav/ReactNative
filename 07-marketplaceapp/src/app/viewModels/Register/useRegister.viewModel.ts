import { useState } from "react";

export function useRegisterViewModel() {
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    setIsLoading,
  };
}
