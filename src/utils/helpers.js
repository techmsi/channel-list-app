import moment from 'moment-timezone';
// Add all desired timezones
moment.tz.add(
  'America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6'
);
// Overwrite zonename w/ zz token
moment.fn.zoneName = function () {
  return this.zoneAbbr().replace(/(.*)(ST)/, '$1DT');
};

const sortedByTime = (arr) =>
  arr.sort((a, b) => moment(a.time) - moment(b.time));

const getFormattedTime = (
  time,
  f = 'h:mm A zz',
  timezone = 'America/New_York'
) => {
  console.log('time', time);
  return moment.tz(time, f, timezone).format(f);
};

const getTimeDiffHours = (startDate, endDate) =>
  moment(startDate).diff(endDate, 'hours');
const addHours = (startDate, hours) =>
  startDate.clone().add({ hours: Math.abs(hours) });

const createDateHeaders = (arr) =>
  sortedByTime(arr).reduce((dates, next, index, array) => {
    let startTime = moment(next.time);
    let dateTimeNext =
      index < array.length - 1 ? moment(array[index + 1].time) : null;
    let diff = dateTimeNext ? getTimeDiffHours(startTime, dateTimeNext) : 0;
    let endTime =
      dateTimeNext && dateTimeNext.isSame(startTime, 'day')
        ? addHours(startTime, diff)
        : addHours(startTime, 1);

    dates = [
      ...dates,
      Object.assign(next, {
        startTime,
        endTime,
        fullDate: startTime.format('ddd, MMMM D, YYYY'),
      }),
    ];

    return dates;
  }, []);

const groupBy = (arr, key) =>
  arr.reduce((obj, next) => {
    (obj[next[key]] = obj[next[key]] || []).push(next);

    return obj;
  }, {});

export { sortedByTime, groupBy, createDateHeaders, getFormattedTime };
