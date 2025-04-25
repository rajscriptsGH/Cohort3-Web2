/* 
Write code that
1. logs hi after 1 second
2. logs hello 3 seconds after step 1
3. logs hello there 5 seconds after step 2
*/

//Without Promise, have callback
setTimeout(() => {
  console.log("hi");
  setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);

//With Promise
