import 'normalize.css';
import './style.css';

// Internal modules
import {
  getCurrentWeather,
  getForecast,
  myLocation,
} from './modules/getWeather';
import { toggleUnits } from './modules/units';
import toggleModal from './modules/modal';

// DOM elements
const searchbar = document.getElementById('searchInput');
const searchButton = document.getElementById('searchBtn');
const currentWeatherContainer = document.getElementById('currentWeather');
const forecastBtnContainer = document.querySelector('.forecastBtn-container');
const forecast = document.getElementById('forecast');
const forecastTimestamp = document.createElement('div');

// Event listeners
searchButton.addEventListener('click', handleSearch);
searchbar.addEventListener('keydown', handleSearchKeyDown);
forecastBtnContainer.addEventListener('click', handleForecastBtnClick);

// Functions
async function displayForecast() {
  const currentCity = document.getElementById('currentCity').innerHTML;
  await getForecast(currentCity);
  moveContainers();
}

function handleSearch() {
  const query = searchbar.value;
  searchbar.value = '';
  getCurrentWeather(query);
  if (forecastBtnContainer.classList.contains('expand')) {
    getForecast(myLocation);
  }
}

function handleSearchKeyDown(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchButton.click();
  }
}

function handleForecastBtnClick() {
  if (forecastBtnContainer.classList.contains('expand')) {
    forecastTimestamp.remove();
    forecast.innerHTML = '';
    moveContainers();
  } else {
    displayForecast();
  }
}

function moveContainers() {
  forecastBtnContainer.classList.toggle('expand');
  currentWeatherContainer.classList.toggle('move');
}

// Initialization
getCurrentWeather(myLocation);
toggleUnits();
toggleModal();
