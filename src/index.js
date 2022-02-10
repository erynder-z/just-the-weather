import 'normalize.css';
import './style.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { format } from 'date-fns';
import {
  getCurrentWeather,
  getForecast,
  myLocation,
} from './modules/getWeather';
import { toggleUnits } from './modules/toggleUnits';
import clearSky from './modules/icons';

const appInterface = (() => {
  const searchbar = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchBtn');
  const currentWeatherContainer = document.getElementById('currentWeather');
  const forecastBtnContainer = document.querySelector('.forecastBtn-container');
  const forecast = document.getElementById('forecast');
  const now = format(new Date(), 'dd.MM@H:mm:ss');
  const forecastTimestamp = document.createElement('div');

  searchButton.addEventListener('click', () => {
    const currentCity = document.getElementById('currentCity').innerHTML;
    const query = searchbar.value;
    searchbar.value = '';
    getCurrentWeather(query);
    if (
      document.querySelector('.forecastBtn-container').className ===
      'forecastBtn-container expand'
    ) {
      getForecast(currentCity);
    }
  });

  searchbar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchButton.click();
    }
  });

  forecastBtnContainer.addEventListener('click', () => {
    async function displayForecast() {
      await getForecast(myLocation);
      forecastBtnContainer.classList.toggle('expand');
      currentWeatherContainer.classList.toggle('move');
      if (forecastBtnContainer.classList.contains('expand')) {
        forecastTimestamp.innerText = `as of: ${now}`;
        forecastBtnContainer.appendChild(forecastTimestamp);
      } else {
        forecastTimestamp.remove();
        forecast.innerHTML = '';
      }
    }
    displayForecast();
    // show a loading screen while data is being fetched
  });
})();

getCurrentWeather();

toggleUnits();
