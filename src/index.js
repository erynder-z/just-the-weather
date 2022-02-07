import 'normalize.css';
import './style.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {
  getCurrentWeather,
  getForecast,
  myLocation,
} from './modules/getWeather';
import { toggleUnits } from './modules/toggleUnits';

const appInterface = (() => {
  const searchbar = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchBtn');
  const forecastButton = document.getElementById('forecastBtn');

  searchButton.addEventListener('click', () => {
    const query = searchbar.value;
    searchbar.value = '';
    getCurrentWeather(query);
  });

  searchbar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchButton.click();
    }
  });

  forecastButton.addEventListener('click', () => {
    getForecast(myLocation);
  });
})();

getCurrentWeather();

toggleUnits();
