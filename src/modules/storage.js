let storageData;

const populateStorage = (currentCity) => {
  const storageString = JSON.stringify(currentCity);
  localStorage.setItem('location', storageString);
};

const retrieveStorage = () => {
  const retrievedStorageString = localStorage.getItem('location');
  storageData = JSON.parse(retrievedStorageString) || ['Marburg'];
  return storageData;
};

export { populateStorage, retrieveStorage };
