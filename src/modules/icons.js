import brokenclouds from '../icons/brokenclouds.png';
import clear from '../icons/clear.png';
import drizzle from '../icons/drizzle.png';
import fewclouds from '../icons/fewclouds.png';
import mist from '../icons/mist.png';
import overcastclouds from '../icons/overcastclouds.png';
import rain from '../icons/rain.png';
import scatteredclouds from '../icons/scatteredclouds.png';
import snow from '../icons/snow.png';
import thunderstorm from '../icons/thunderstorm.png';

const getIcon = (condition) => {
  const weatherIcons = [
    { name: 'brokenclouds', icon: brokenclouds },
    { name: 'clear', icon: clear },
    { name: 'drizzle', icon: drizzle },
    { name: 'fewclouds', icon: fewclouds },
    { name: 'mist', icon: mist },
    { name: 'overcastclouds', icon: overcastclouds },
    { name: 'rain', icon: rain },
    { name: 'scatteredclouds', icon: scatteredclouds },
    { name: 'snow', icon: snow },
    { name: 'thunderstorm', icon: thunderstorm },
  ];

  const iconTarget = condition.replace(/\s+/g, '').toLowerCase();
  let currentIcon;

  weatherIcons.forEach((icon) => {
    if (icon.name === iconTarget) {
      currentIcon = icon.icon;
    }
  });

  return currentIcon;
};

export { getIcon };
