import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const getFormattedTime = (
  time,
  formatString = 'h:mm A',
  timezone = 'America/Toronto'
) => {
  const formattedTime = dayjs(time).tz(timezone).format(formatString);
  if (formattedTime === 'Invalid Date') {
    console.log('Formatted time', time);
  }
  return formattedTime;
};
