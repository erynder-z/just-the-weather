import { fromUnixTime, format } from 'date-fns';
import colorizeBackground from './background';
import { getIcon } from './icons';
import { getWindDirection, unit } from './units';

const currentWeatherContainer = document.getElementById('currentWeather');
const forecastContainer = document.getElementById('forecast');

const renderWeather = (weatherData) => {
  let temperatureUnit;
  let windUnit;
  unit === 'imperial' ? (temperatureUnit = '°F') : (temperatureUnit = '°C');
  unit === 'imperial' ? (windUnit = 'mph') : (windUnit = 'm/s');

  const city = document.createElement('h1');
  city.setAttribute('id', 'currentCity');
  const country = document.createElement('h3');
  const localTime = document.createElement('div');
  const icon = document.createElement('img');
  /* const main = document.createElement('div'); */
  const description = document.createElement('div');
  const temp = document.createElement('div');
  const feelsLike = document.createElement('div');
  const tempMin = document.createElement('div');
  const tempMax = document.createElement('div');
  const pressure = document.createElement('div');
  const humidity = document.createElement('div');
  const windSpeed = document.createElement('div');
  const windDeg = document.createElement('div');

  currentWeatherContainer.innerHTML = '';
  forecastContainer.innerHTML = '';

  city.innerText = weatherData.name;
  country.innerText = weatherData.country;

  localTime.innerText = ` local time: ${getLocalTime(weatherData.timezone)}`;
  setInterval(runClock, 1000, weatherData.timezone);

  if (weatherData.main === 'Clouds') {
    icon.src = getIcon(
      weatherData.description,
      weatherData.time,
      weatherData.sunset,
      weatherData.sunrise
    );
  } else {
    icon.src = getIcon(
      weatherData.main,
      weatherData.time,
      weatherData.sunset,
      weatherData.sunrise
    );
  }

  icon.setAttribute('id', 'activeIcon');
  icon.classList.add('icon');
  description.innerText = weatherData.description;
  temp.innerText = `${weatherData.temp}${temperatureUnit}`;
  feelsLike.innerText = `Feels like: ${weatherData.feelsLike}${temperatureUnit}`;
  tempMax.innerText = `Max: ${weatherData.tempMax}${temperatureUnit}`;
  tempMin.innerText = `Min: ${weatherData.tempMin}${temperatureUnit}`;
  pressure.innerText = `Pressure: ${weatherData.pressure}mbar`;
  humidity.innerText = `Humidity: ${weatherData.humidity}%`;
  windSpeed.innerText = `Wind speed: ${weatherData.windSpeed} ${windUnit}`;
  /*  windDeg.innerText = `Wind from: ${weatherData.windDeg}`; */
  windDeg.innerText = `Wind from: ${getWindDirection(weatherData.windDeg)}`;

  currentWeatherContainer.appendChild(city);
  currentWeatherContainer.appendChild(country);
  currentWeatherContainer.append(localTime);
  currentWeatherContainer.append(icon);
  currentWeatherContainer.appendChild(description);
  currentWeatherContainer.appendChild(temp);
  currentWeatherContainer.appendChild(feelsLike);
  currentWeatherContainer.appendChild(tempMax);
  currentWeatherContainer.appendChild(tempMin);
  currentWeatherContainer.appendChild(pressure);
  currentWeatherContainer.appendChild(humidity);
  currentWeatherContainer.appendChild(windSpeed);
  currentWeatherContainer.appendChild(windDeg);

  colorizeBackground(weatherData.description);

  function runClock(timeData) {
    localTime.innerText = ` local time: ${getLocalTime(timeData)}`;
  }
};

const renderForecast = (weatherForecast) => {
  let temperatureUnit;
  let windUnit;
  unit === 'imperial' ? (temperatureUnit = '°F') : (temperatureUnit = '°C');
  unit === 'imperial' ? (windUnit = 'mph') : (windUnit = 'm/s');

  forecastContainer.innerHTML = '';

  weatherForecast.forEach((element) => {
    const dayForecastContainer = document.createElement('div');
    dayForecastContainer.classList.add('day-container');
    const conditionContainer = document.createElement('div');
    conditionContainer.classList.add('status');
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('forecast-details');
    const day = document.createElement('div');
    day.classList.add('day');
    const date = document.createElement('div');
    const main = document.createElement('div');
    const description = document.createElement('div');
    const humidity = document.createElement('div');
    const tempMax = document.createElement('div');
    const tempMin = document.createElement('div');

    const longDate = fromUnixTime(element.date);
    const formatedDateDay = format(longDate, 'EEEE');
    const formatedDate = format(longDate, 'do MMM');

    day.innerText = formatedDateDay;
    date.innerText = formatedDate;
    description.innerText = element.description;
    tempMax.innerText = `Max: ${element.tempMax}${temperatureUnit}`;
    tempMin.innerText = `Min: ${element.tempMin}${temperatureUnit}`;
    humidity.innerText = `Humidity: ${element.humidity}%`;
    forecastContainer.appendChild(dayForecastContainer);
    dayForecastContainer.appendChild(conditionContainer);
    dayForecastContainer.appendChild(detailsContainer);
    detailsContainer.appendChild(day);
    detailsContainer.appendChild(date);
    detailsContainer.appendChild(main);
    detailsContainer.appendChild(description);
    detailsContainer.appendChild(tempMax);
    detailsContainer.appendChild(tempMin);
    detailsContainer.appendChild(humidity);

    conditionContainer.classList.add(element.description.replace(/\s/g, '-'));
  });
};

function getLocalTime(shiftFromUTC) {
  const now = Date.now();
  const timeshift = shiftFromUTC * 1000;
  const offset = 3.6e6;
  const formatedDate = format(now + timeshift - offset, 'HH:mm:ss');

  return formatedDate;
}

export { renderWeather, renderForecast };
