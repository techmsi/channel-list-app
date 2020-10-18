import dayjs from 'dayjs';
import { sortedByTime, getTimeDiffHours, addHours } from './helpers';

export const createDateHeaders = (arr) => {
  return sortedByTime(arr).reduce(
    (dates, currentTime, index, dateTimesArray) => {
      let startTime = dayjs(currentTime.time);
      let dateTimeNext = null;
      let diff = 0;
      let endTime = addHours(startTime, 1);
      let sameDay = false;
      const fullDate = startTime.format('ddd, MMMM D, YYYY');

      if (index < dateTimesArray.length - 1) {
        const nextIndex = dateTimesArray[index + 1];
        dateTimeNext = dayjs(nextIndex.time);
        diff = getTimeDiffHours(startTime, dateTimeNext);
        const sameDay = dateTimeNext.isSame(startTime, 'day');

        if (sameDay) {
          endTime = addHours(startTime, Math.abs(diff));
        }
      }

      console.table({
        fullDate,
        startTime: startTime.format('hh:mm A'),
        endTime: endTime.format('hh:mm A'),
        diff,
        dateTimeNext: dateTimeNext ? dateTimeNext.format('hh:mm A') : '',
        sameDay,
      });

      currentTime = {
        ...currentTime,
        ...{
          startTime,
          endTime,
          fullDate,
          diff,
        },
      };

      dates = [...dates, currentTime];

      return dates;
    },
    []
  );
};
