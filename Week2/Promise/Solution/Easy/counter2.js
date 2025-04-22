/*
Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)
*/

//count from 0-10 using setTimeOut
let count = 0;

const counter = () => {
  console.log(count);
  count++;

  if (count <= 10) {
    setTimeout(counter, 1000);
  }
};
counter();
