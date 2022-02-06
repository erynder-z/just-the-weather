import { getCurrentWeather } from './getWeather';

let useImperial = false;
let unit = 'metric';

const toggleUnits = () => {
  const toggle = document.getElementById('unitBtn');
  toggle.addEventListener('click', () => {
    useImperial = !useImperial;
    useImperial ? (unit = 'imperial') : (unit = 'metric');
    getCurrentWeather();
  });
};

export { unit, toggleUnits };
