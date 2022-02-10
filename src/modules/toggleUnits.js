import { getCurrentWeather, getForecast } from './getWeather';

let useImperial = false;
let unit = 'metric';
const forecastContainer = document.getElementById('forecast');

const toggleUnits = () => {
  const toggle = document.getElementById('unitBtn');

  toggle.addEventListener('click', () => {
    const currentCity = document.getElementById('currentCity').innerHTML;
    useImperial = !useImperial;
    useImperial ? (unit = 'imperial') : (unit = 'metric');
    getCurrentWeather(currentCity);
    // get forecast data when forecast was shown on click
    if (
      document.querySelector('.forecastBtn-container').className ===
      'forecastBtn-container expand'
    ) {
      getForecast(currentCity);
    }
  });
};

export { unit, toggleUnits };
