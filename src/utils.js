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

export function smoothScrollTo(element, to, duration) {
  let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;
      
  let animateScroll = function(){        
      currentTime += increment;
      let val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}


//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

