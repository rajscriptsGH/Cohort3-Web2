/*
Create a counter in JavaScript
We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

*/

const { log } = require("console");

// //count from 0-10
// let count = 0;
// const counter = setInterval(() => {
//   console.log(count);
//   count = count + 1;

//   if (count === 10) {
//     clearInterval(counter);
//     console.log("Counter stopped");
//   }
// }, 1000);

// console.log(count);

//count from 5-0
let count = 5;

const counter = setInterval(() => {
  console.log(count);

  if (count === 0) {
    clearInterval(counter);
    console.log("Goooo");
  }
  count = count - 1;
}, 1000);
