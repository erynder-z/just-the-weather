import 'core-js/stable';
import 'regenerator-runtime/runtime';

let myLocation;

async function getCurrentWeather(location) {
  try {
    if (!location) {
      location = 'Marburg';
    }
    myLocation = location;
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${myLocation}&APPID=42aed38ac531db7e1130ba609d7e6b7e`,
      { mode: 'cors' },
    );
    const fetchData = await response.json();
    console.table(
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
    );
  } catch (error) {
    console.log(`There has been a problem fetching your weather data:${error}`);
  }
}

getCurrentWeather('Frankfurt');
