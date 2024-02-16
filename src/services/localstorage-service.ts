export const localStorageService = () => {
  
  const setData = (key: string, value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const getData = (key: string) => {
    if (isDataSaved(key)) {
      return JSON.parse(localStorage.getItem(key) || '');
    }
  }

  const isDataSaved = (key: string): boolean => {
    return !!(localStorage.getItem(key) && localStorage.getItem(key) !== null);
  }

  const clear = () => {
    localStorage.clear();
  }

  return {
    setData, 
    getData,
    isDataSaved, 
    clear
  }
}
