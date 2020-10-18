import dayjs from 'dayjs';

export const sortedByTime = (arr) =>
  arr.sort((a, b) => dayjs(a.time) - dayjs(b.time));

export const getTimeDiffHours = (startDate, endDate) =>
  dayjs(startDate).diff(endDate, 'hours');

export const addHours = (startDate, numberOfHours) =>
  dayjs(startDate).add(numberOfHours, 'hours');
