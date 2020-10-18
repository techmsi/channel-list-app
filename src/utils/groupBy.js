export const groupBy = (arr, key) =>
  arr.reduce((obj, next) => {
    (obj[next[key]] = obj[next[key]] || []).push(next);

    return obj;
  }, {});
