import renderWeather from './renderWeather';

let myLocation;
const weatherArray = [];

async function getCurrentWeather(location) {
  try {
    if (!location) {
      location = 'Marburg';
    }
    myLocation = location;
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${myLocation}&units=metric&APPID=42aed38ac531db7e1130ba609d7e6b7e`,
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
      windDeg
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
      fetchData.wind.deg
    );

    weatherArray.splice(0, 1, newLocation);
  } catch (error) {
    console.log(`There has been a problem fetching your weather data:${error}`);
  }

  console.log(weatherArray);
  renderWeather(weatherArray[0]);
}

export default getCurrentWeather;
