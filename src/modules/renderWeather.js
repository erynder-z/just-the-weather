import { fromUnixTime, format } from 'date-fns';
import { unit } from './toggleUnits';

const currentWeatherContainer = document.getElementById('currentWeather');
const forecastContainer = document.getElementById('forecast');

const renderWeather = (weatherData) => {
  let temperatureUnit;
  let windUnit;
  unit === 'imperial' ? (temperatureUnit = '°F') : (temperatureUnit = '°C');
  unit === 'imperial' ? (windUnit = 'mph') : (windUnit = 'm/s');

  const city = document.createElement('h1');
  const country = document.createElement('h3');
  const main = document.createElement('div');
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
  main.innerText = weatherData.main;
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
  currentWeatherContainer.appendChild(main);
  currentWeatherContainer.appendChild(description);
  currentWeatherContainer.appendChild(temp);
  currentWeatherContainer.appendChild(feelsLike);
  currentWeatherContainer.appendChild(tempMin);
  currentWeatherContainer.appendChild(tempMax);
  currentWeatherContainer.appendChild(pressure);
  currentWeatherContainer.appendChild(humidity);
  currentWeatherContainer.appendChild(windSpeed);
  currentWeatherContainer.appendChild(windDeg);
};

const renderForecast = (weatherForecast) => {
  let temperatureUnit;
  let windUnit;
  unit === 'imperial' ? (temperatureUnit = '°F') : (temperatureUnit = '°C');
  unit === 'imperial' ? (windUnit = 'mph') : (windUnit = 'm/s');

  forecastContainer.innerHTML = '';

  weatherForecast.forEach((element) => {
    const dayForecastContainer = document.createElement('div');
    const date = document.createElement('div');
    const main = document.createElement('div');
    const description = document.createElement('div');
    const humidity = document.createElement('div');
    const tempMax = document.createElement('div');
    const tempMin = document.createElement('div');

    const longDate = fromUnixTime(element.date);
    const formatedDate = format(longDate, 'EEEE, do LLLL');

    date.innerText = formatedDate;
    main.innerText = element.main;
    description.innerText = element.description;
    tempMax.innerText = `${element.tempMax}${temperatureUnit}`;
    tempMin.innerText = `${element.tempMin}${temperatureUnit}`;
    humidity.innerText = `${element.humidity}%`;
    forecastContainer.appendChild(dayForecastContainer);
    dayForecastContainer.appendChild(date);
    dayForecastContainer.appendChild(main);
    dayForecastContainer.appendChild(description);
    dayForecastContainer.appendChild(tempMax);
    dayForecastContainer.appendChild(tempMin);
    dayForecastContainer.appendChild(humidity);
  });
};

export { renderWeather, renderForecast };
