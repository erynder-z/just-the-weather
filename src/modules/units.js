import { getCurrentWeather, getForecast } from './getWeather';

let useImperial = false;
let unit = 'metric';

const toggleUnits = () => {
  const toggle = document.getElementById('unitBtn');

  toggle.addEventListener('click', () => {
    const currentCity = document.getElementById('currentCity').innerHTML;
    useImperial = !useImperial;
    useImperial ? (unit = 'imperial') : (unit = 'metric');
    useImperial
      ? (document.getElementById('unitBtn').innerText = '° F')
      : (document.getElementById('unitBtn').innerText = '° C');
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

const getWindDirection = (directionInDegres) => {
  function inRange(x, min, max) {
    return (x - min) * (x - max) <= 0;
  }
  if (inRange(directionInDegres, 0, 11)) {
    return 'N';
  }
  if (inRange(directionInDegres, 349, 360)) {
    return 'N';
  }
  if (inRange(directionInDegres, 12, 33)) {
    return 'NNE';
  }
  if (inRange(directionInDegres, 34, 56)) {
    return 'NE';
  }
  if (inRange(directionInDegres, 57, 78)) {
    return 'ENE';
  }
  if (inRange(directionInDegres, 79, 101)) {
    return 'E';
  }
  if (inRange(directionInDegres, 102, 123)) {
    return 'ESE';
  }
  if (inRange(directionInDegres, 124, 146)) {
    return 'SE';
  }
  if (inRange(directionInDegres, 147, 168)) {
    return 'SSE';
  }
  if (inRange(directionInDegres, 169, 191)) {
    return 'S';
  }
  if (inRange(directionInDegres, 192, 213)) {
    return 'SSW';
  }
  if (inRange(directionInDegres, 214, 236)) {
    return 'SW';
  }
  if (inRange(directionInDegres, 237, 258)) {
    return 'WSW';
  }
  if (inRange(directionInDegres, 259, 281)) {
    return 'W';
  }
  if (inRange(directionInDegres, 282, 303)) {
    return 'WNW';
  }
  if (inRange(directionInDegres, 304, 326)) {
    return 'NW';
  }
  if (inRange(directionInDegres, 327, 348)) {
    return 'NNW';
  }
};

export { unit, toggleUnits, getWindDirection };
