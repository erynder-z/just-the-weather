const { body } = document;

const colorizeBackground = (weatherDataDescription, time, sunset, sunrise) => {
  const isNight = (x, set, rise) => (x - set) * (x - rise) > 0;

  body.className = '';
  if (isNight(time, sunset, sunrise) === true) {
    body.classList.add('night');
    document.getElementById('currentWeather').style.color = 'whitesmoke';
    document.getElementById('forecast').style.color = 'whitesmoke';
    document.getElementById('activeIcon').classList.add('dark');
    return;
  }
  body.classList.add(weatherDataDescription.replace(/\s/g, '-'));

  const substringRain = 'rain';
  if (
    weatherDataDescription.replace(/\s/g, '-') === 'few-clouds' ||
    weatherDataDescription.includes(substringRain)
  ) {
    document.getElementById('currentWeather').style.color = 'whitesmoke';
    document.getElementById('forecast').style.color = 'whitesmoke';
    document.getElementById('activeIcon').classList.add('dark');
  } else {
    document.getElementById('currentWeather').style.color = 'black';
    document.getElementById('forecast').style.color = 'black';
    document.getElementById('activeIcon').classList.remove('dark');
  }
};

export default colorizeBackground;
