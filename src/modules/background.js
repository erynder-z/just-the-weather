const { body } = document;

const colorizeBackground = (weatherDataDescription) => {
  body.className = '';
  body.classList.add(weatherDataDescription.replace(/\s/g, '-'));
};

export default colorizeBackground;
