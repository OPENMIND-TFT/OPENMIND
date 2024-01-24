const BASE_URL = process.env.PUBLIC_URL;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const week = day * 7;
const year = month * 12;

export const TIME_IN_MILLISECONDS = {
  second,
  minute,
  hour,
  day,
  month,
  week,
  year,
};

export default BASE_URL;
