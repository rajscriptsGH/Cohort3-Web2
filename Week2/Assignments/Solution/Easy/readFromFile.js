/*
Reading the contents of a file
Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

*/
const fs = require("fs");

function filePathName(resolve) {
  fs.readFile("read.txt", "utf-8", function (err, contents) {
    resolve(contents);
  });
}

function readFromFile() {
  return new Promise(filePathName);
}

// function callback(content) {
//   console.log(content);
// }

readFromFile().then((content) => {
  console.log("File content:", content);

  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  console.log("🔥 Expensive operation complete:", sum);
});
