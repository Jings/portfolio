export const lsSet = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const lsGet = (key: string): string | null => localStorage.getItem(key);
