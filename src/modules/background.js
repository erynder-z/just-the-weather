import { isNight } from './time';

const { body } = document;
// colorize background according to weather and time
const colorizeBackground = (weatherDataDescription, time, sunset, sunrise) => {
  body.className = '';
  // white text during night
  if (isNight(time, sunset, sunrise) === true) {
    body.classList.add('night');
    document.getElementById('currentWeather').style.color = 'whitesmoke';
    document.getElementById('forecastBtn').style.color = 'whitesmoke';
    document.getElementById('expandIcon').style.color = 'whitesmoke';
    document.getElementById('activeIcon').classList.add('dark');
    return;
  }
  document.getElementById('forecastBtn').style.color = 'black';
  document.getElementById('expandIcon').style.color = 'black';

  body.classList.add(weatherDataDescription.replace(/\s/g, '-'));

  // white text when background is dark
  const substringRain = 'rain';
  if (
    weatherDataDescription.replace(/\s/g, '-') === 'few-clouds' ||
    weatherDataDescription.includes(substringRain)
  ) {
    document.getElementById('currentWeather').style.color = 'whitesmoke';
    document.getElementById('activeIcon').classList.add('dark');
    document.getElementById('forecastBtn').style.color = 'whitesmoke';
    document.getElementById('expandIcon').style.color = 'whitesmoke';
  } else {
    document.getElementById('currentWeather').style.color = 'black';
    document.getElementById('activeIcon').classList.remove('dark');
    document.getElementById('forecastBtn').style.color = 'black';
    document.getElementById('expandIcon').style.color = 'black';
  }
};

const colorizeForecast = (weatherDataDescription) => {
  const substringRain = 'rain';
  const substringSnow = 'snow';
  if (
    weatherDataDescription.replace(/\s/g, '-') === 'few-clouds' ||
    (weatherDataDescription.includes(substringRain) &&
      !weatherDataDescription.includes(substringSnow))
  ) {
    return true;
  }
};

export { colorizeBackground, colorizeForecast };
