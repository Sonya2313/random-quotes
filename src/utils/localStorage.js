function localStorageSetItem(key, value) {
  if (typeof key !== 'string') {
    console.error('Error: key must be a string');
    return;
  }

  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
  }
}

function localStorageGetitem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}

function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

function localStorageClear() {
  localStorage.clear();
}

export {
  localStorageSetItem,
  localStorageGetitem,
  localStorageRemoveItem,
  localStorageClear,
};
