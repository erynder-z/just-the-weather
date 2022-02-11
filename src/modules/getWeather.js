import { populateStorage, retrieveStorage } from './storage';
import { renderWeather, renderForecast } from './renderWeather';
import { unit } from './units';

let myLocation;
const weatherArray = [];

function toggleOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.toggle('active');
}

async function getCurrentWeather(location) {
  toggleOverlay();
  try {
    if (!location) {
      location = retrieveStorage();
    }

    myLocation = location;
    populateStorage(location);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${myLocation}&units=${unit}&APPID=42aed38ac531db7e1130ba609d7e6b7e`,
      { mode: 'cors' }
    );
    const fetchData = await response.json();

    const weatherFactory = (
      name,
      country,
      main,
      description,
      temp,
      feelsLike,
      tempMin,
      tempMax,
      pressure,
      humidity,
      windSpeed,
      windDeg,
      time,
      sunset,
      sunrise
    ) => ({
      name,
      country,
      main,
      description,
      temp,
      feelsLike,
      tempMin,
      tempMax,
      pressure,
      humidity,
      windSpeed,
      windDeg,
      time,
      sunset,
      sunrise,
    });

    const newLocation = weatherFactory(
      fetchData.name,
      fetchData.sys.country,
      fetchData.weather[0].main,
      fetchData.weather[0].description,
      fetchData.main.temp,
      fetchData.main.feels_like,
      fetchData.main.temp_min,
      fetchData.main.temp_max,
      fetchData.main.pressure,
      fetchData.main.humidity,
      fetchData.wind.speed,
      fetchData.wind.deg,
      fetchData.dt,
      fetchData.sys.sunset,
      fetchData.sys.sunrise
    );

    weatherArray.splice(0, 1, newLocation);
  } catch (error) {
    alert(`There has been a problem fetching your weather data:${error}`);
  }

  renderWeather(weatherArray[0]);
  toggleOverlay();
}

async function getForecast(location) {
  toggleOverlay();
  const forecast = [];
  const query = location;
  try {
    // need to get latitute and longitude of city to call the openweathermap oneCall API
    const geocodingResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&APPID=42aed38ac531db7e1130ba609d7e6b7e`,
      { mode: 'cors' }
    );
    const geocodingFetchData = await geocodingResponse.json();
    const { lat } = geocodingFetchData[0];
    const { lon } = geocodingFetchData[0];

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=${unit}&APPID=42aed38ac531db7e1130ba609d7e6b7e`,
      { mode: 'cors' }
    );
    const fetchData = await response.json();

    const forecastFactory = (
      date,
      main,
      description,
      tempMin,
      tempMax,
      humidity
    ) => ({
      date,
      main,
      description,
      tempMin,
      tempMax,
      humidity,
    });

    fetchData.daily.forEach((element) => {
      const currentDay = forecastFactory(
        element.dt,
        element.weather[0].main,
        element.weather[0].description,
        element.temp.min,
        element.temp.max,
        element.humidity
      );
      forecast.push(currentDay);
    });
    forecast.shift();
    renderForecast(forecast);
  } catch (error) {
    alert(`There has been a problem fetching your weather data:${error}`);
  }
  toggleOverlay();
}

export { getCurrentWeather, getForecast, myLocation };
