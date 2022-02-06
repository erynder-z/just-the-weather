const renderWeather = (weatherData) => {
  console.log(weatherData);
  const currentWeatherContainer = document.getElementById('currentWeather');
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

  city.innerText = weatherData.name;
  country.innerText = weatherData.country;
  main.innerText = weatherData.main;
  description.innerText = weatherData.description;
  temp.innerText = weatherData.temp;
  feelsLike.innerText = `Feels like:${weatherData.feelsLike}`;
  tempMin.innerText = `Max: ${weatherData.tempMin}`;
  tempMax.innerText = `Min: ${weatherData.tempMax}`;
  pressure.innerText = `Pressure: ${weatherData.pressure}mbar`;
  humidity.innerText = `Humidity: ${weatherData.humidity}%`;
  windSpeed.innerText = `Wind speed: ${weatherData.windSpeed}`;
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

export default renderWeather;
