export const saveDataToLocalStorage = (key: string, items: string) => {
  localStorage.setItem(key, items);
};

export const deleteDataFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const keyExists = (key: string): boolean => {
  const data: string | null = localStorage.getItem(key);
  if (data) return true;
  return false;
};
