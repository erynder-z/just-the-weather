import { fromUnixTime, format } from 'date-fns';
import colorizeBackground from './background';
import { getIcon } from './icons';
import { unit } from './toggleUnits';

/* const today = format(new Date(), 'yyyy-MM-dd'); */
const currentWeatherContainer = document.getElementById('currentWeather');
const forecastContainer = document.getElementById('forecast');

const renderWeather = (weatherData) => {
  let temperatureUnit;
  let windUnit;
  unit === 'imperial' ? (temperatureUnit = '°F') : (temperatureUnit = '°C');
  unit === 'imperial' ? (windUnit = 'mph') : (windUnit = 'm/s');

  const city = document.createElement('h1');
  const country = document.createElement('h3');
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

  if (weatherData.main === 'Clouds') {
    icon.src = `../src/icons/${getIcon(weatherData.description)}.png`;
  } else {
    icon.src = `../src/icons/${getIcon(weatherData.main)}.png`;
  }
  icon.classList.add('icon');
  /* main.innerText = weatherData.main; */
  description.innerText = weatherData.description;
  temp.innerText = `${weatherData.temp}${temperatureUnit}`;
  feelsLike.innerText = `Feels like: ${weatherData.feelsLike}${temperatureUnit}`;
  tempMin.innerText = `Max: ${weatherData.tempMin}${temperatureUnit}`;
  tempMax.innerText = `Min: ${weatherData.tempMax}${temperatureUnit}`;
  pressure.innerText = `Pressure: ${weatherData.pressure}mbar`;
  humidity.innerText = `Humidity: ${weatherData.humidity}%`;
  windSpeed.innerText = `Wind speed: ${weatherData.windSpeed} ${windUnit}`;
  windDeg.innerText = `Wind from: ${weatherData.windDeg}`;

  currentWeatherContainer.appendChild(city);
  currentWeatherContainer.appendChild(country);
  currentWeatherContainer.append(icon);
  /*   currentWeatherContainer.appendChild(main); */
  currentWeatherContainer.appendChild(description);
  currentWeatherContainer.appendChild(temp);
  currentWeatherContainer.appendChild(feelsLike);
  currentWeatherContainer.appendChild(tempMin);
  currentWeatherContainer.appendChild(tempMax);
  currentWeatherContainer.appendChild(pressure);
  currentWeatherContainer.appendChild(humidity);
  currentWeatherContainer.appendChild(windSpeed);
  currentWeatherContainer.appendChild(windDeg);

  colorizeBackground(weatherData.description);
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
    const date = document.createElement('div');
    date.classList.add('day');
    const main = document.createElement('div');
    const description = document.createElement('div');
    const humidity = document.createElement('div');
    const tempMax = document.createElement('div');
    const tempMin = document.createElement('div');

    const longDate = fromUnixTime(element.date);
    const formatedDate = format(longDate, 'EEEE, do LLLL');

    date.innerText = formatedDate;
    /* main.innerText = element.main; */
    description.innerText = element.description;
    tempMax.innerText = `Max: ${element.tempMax}${temperatureUnit}`;
    tempMin.innerText = `Min: ${element.tempMin}${temperatureUnit}`;
    humidity.innerText = `Humidity: ${element.humidity}%`;
    forecastContainer.appendChild(dayForecastContainer);
    dayForecastContainer.appendChild(conditionContainer);
    dayForecastContainer.appendChild(detailsContainer);
    detailsContainer.appendChild(date);
    detailsContainer.appendChild(main);
    detailsContainer.appendChild(description);
    detailsContainer.appendChild(tempMax);
    detailsContainer.appendChild(tempMin);
    detailsContainer.appendChild(humidity);

    conditionContainer.classList.add(element.description.replace(/\s/g, '-'));
  });
};

export { renderWeather, renderForecast };
