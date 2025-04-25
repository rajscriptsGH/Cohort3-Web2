const fs = require("fs");

function readFilePath(resolve) {
  fs.readFile("a.txt", "utf-8", function (err, print) {
    setTimeout(() => {
      resolve(print);
    }, 1500);
  });
}

function readFile(fileName) {
  return new Promise(readFilePath);
}

const promise = readFile();

function callback(content) {
  console.log(content);
}

promise.then(callback);
