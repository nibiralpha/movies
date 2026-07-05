import { useCallback, useState } from "react";
import { localStorageName } from "@Constant/ApiDataHelper";
import { LocalStrorageData } from "@app-types/Saved";

export const useLocalStorage = () => {
  
  const getValue = (key: string) => {
    if (typeof window === "undefined") {
      return null;
    }

    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const setValue = useCallback((key: string, value: unknown) => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing localStorage:", error);
    }
  }, []);

  const removeValue = (id: number) => {
    const data: LocalStrorageData[] = getValue(localStorageName);
    const filterItem = data.filter((item) => item.id === id)
    
    return filterItem;
  };

  return {
    getValue,
    setValue,
    removeValue,
  };
};
