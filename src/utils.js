import dayjs from 'dayjs';

export function hyphenateSpaces(str) {
   return str.replace(/\s/g, '-');
}

export function randomNum(max) {
  // returns a random integer from 0 to 9
  return Math.floor(Math.random() * max) +1;
}

export function getTime(ts){
  return dayjs(ts).format('h:mm A');
}

