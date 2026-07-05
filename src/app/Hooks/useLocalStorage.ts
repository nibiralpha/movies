import { useCallback, useState } from "react";

export function useLocalStorage() {
  const getValue = (key: string) => {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error reading localStorage:", error);
    }
  };

  const setValue = useCallback((key: string, value: unknown) => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing localStorage:", error);
    }
  }, []);

  const removeValue = useCallback((key: string) => {
    if (typeof window === "undefined") return;

    localStorage.removeItem(key);
  }, []);

  return {
    getValue,
    setValue,
    removeValue,
  };
}
