export const setValue = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getValue = <T>(key: string, defaultValue:T):T=> {
  try {
    const rawValue = localStorage.getItem(key);

    if(!rawValue){
      return defaultValue;
    }
    return JSON.parse(rawValue);
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}
