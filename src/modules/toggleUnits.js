import { getCurrentWeather, getForecast } from './getWeather';

let useImperial = false;
let unit = 'metric';

const toggleUnits = () => {
  const toggle = document.getElementById('unitBtn');

  toggle.addEventListener('click', () => {
    const currentCity = document.getElementById('currentCity').innerHTML;
    useImperial = !useImperial;
    useImperial ? (unit = 'imperial') : (unit = 'metric');
    getCurrentWeather(currentCity);
  });
};

export { unit, toggleUnits };
