import 'core-js/stable';
import 'regenerator-runtime/runtime';
import getCurrentWeather from './modules/getWeather';

const searchCity = (() => {
  const searchbar = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchBtn');

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
})();

getCurrentWeather();
