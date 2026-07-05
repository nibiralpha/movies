export const saveData = (key: string, items: string) => {
  localStorage.setItem(key, items);
};

export const deleteData = (key: string) => {
  localStorage.removeItem(key);
};

export const loadData = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (item === null) {
    return null;
  }
  return JSON.parse(item) as T;
};

export const keyExists = (key: string): boolean => {
  const data: string | null = localStorage.getItem(key);
  if (data) return true;
  return false;
};
