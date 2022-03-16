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
  body.classList.add(weatherDataDescription.replace(/\s/g, '-'));

  // white text when background is dark
  const substringRain = 'rain';
  if (
    weatherDataDescription.replace(/\s/g, '-') === 'few-clouds' ||
    weatherDataDescription.includes(substringRain)
  ) {
    document.getElementById('currentWeather').style.color = 'whitesmoke';
    document.getElementById('activeIcon').classList.add('dark');
  } else {
    document.getElementById('currentWeather').style.color = 'black';
    document.getElementById('activeIcon').classList.remove('dark');
  }
};

const colorizeForecast = (weatherDataDescription) => {
  const substringRain = 'rain';
  if (
    weatherDataDescription.replace(/\s/g, '-') === 'few-clouds' ||
    weatherDataDescription.includes(substringRain)
  ) {
    return true;
  }
};

export { colorizeBackground, colorizeForecast };
