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
import clearnight from '../icons/clearnight.png';
import fewcloudsnight from '../icons/fewcloudsnight.png';
import scatteredcloudsnight from '../icons/scatteredcloudsnight.png';
import { isNight } from './time';

const getIcon = (condition, time, sunset, sunrise) => {
  const weatherIcons = [
    { name: 'brokenclouds', icon: brokenclouds },
    { name: 'clear', icon: clear, nighticon: clearnight },
    { name: 'drizzle', icon: drizzle },
    { name: 'fewclouds', icon: fewclouds, nighticon: fewcloudsnight },
    { name: 'mist', icon: mist },
    { name: 'overcastclouds', icon: overcastclouds },
    { name: 'rain', icon: rain },
    {
      name: 'scatteredclouds',
      icon: scatteredclouds,
      nighticon: scatteredcloudsnight,
    },
    { name: 'snow', icon: snow },
    { name: 'thunderstorm', icon: thunderstorm },
  ];

  // select icon according to weather condition and time
  const iconTarget = condition.replace(/\s+/g, '').toLowerCase();
  let currentIcon;

  weatherIcons.forEach((icon) => {
    if (icon.name === iconTarget) {
      if (isNight(time, sunset, sunrise) === true) {
        if (!icon.nighticon) {
          currentIcon = icon.icon;
        } else {
          currentIcon = icon.nighticon;
        }
      } else {
        currentIcon = icon.icon;
      }
    }
  });

  return currentIcon;
};

export { getIcon };
