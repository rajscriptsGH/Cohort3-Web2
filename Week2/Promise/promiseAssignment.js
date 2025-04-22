/* 

Q: Write a function that
1. Reads the contents of a file
2. Trims the extra space from the left and right
3. Writes it back to the file

*/

// const fs = require('fs')

// //Normal asyn
// fs.readFile('a.txt', 'utf-8', function (err, display) {
//     console.log(display);
// })

const fs = require("fs").promises;

fs.readFile("a.txt", "utf-8").then((data) => {
  console.log(data);
});
