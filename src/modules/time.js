import { format } from 'date-fns';

// check if time is nighttime
const isNight = (x, set, rise) => (x - set) * (x - rise) > 0;

function getLocalTime(shiftFromUTC) {
  const now = Date.now();
  const timeshift = shiftFromUTC * 1000;
  const offset = 3.6e6;
  const formatedDate = format(now + timeshift - offset, 'HH:mm:ss');

  return formatedDate;
}

export { isNight, getLocalTime };
