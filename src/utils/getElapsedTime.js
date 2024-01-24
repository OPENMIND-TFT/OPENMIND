import { TIME_IN_MILLISECONDS } from '../constants/constants';

const getElapsedTime = createdAt => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime = now - createdAtDate;
  const { minute, hour, day, week, month, year } = TIME_IN_MILLISECONDS;

  if (year * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / year)}년전`;
  }
  if (year <= elapsedTime) {
    return `1년전`;
  }
  if (month * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / month)}달전`;
  }
  if (month <= elapsedTime) {
    return `1달전`;
  }
  if (week * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / week)}주전`;
  }
  if (week <= elapsedTime) {
    return `1주전`;
  }
  if (day * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / day)}달전`;
  }
  if (day <= elapsedTime) {
    return `1일전`;
  }
  if (hour * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / hour)}시간전`;
  }
  if (hour <= elapsedTime) {
    return `1시간전`;
  }
  if (minute * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / minute)}분전`;
  }
  return `1분전`;
};

export default getElapsedTime;
