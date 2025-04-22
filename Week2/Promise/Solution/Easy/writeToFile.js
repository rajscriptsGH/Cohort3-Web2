/*
Write to a file
Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.
*/

//fs.writeFile(path, data, options, callback)

const fs = require("fs");

// fs.writeFileSync("write.txt", "writing to this file", "utf-8");

function writeFileAsync() {
  return new Promise((resolve, reject) => {
    fs.writeFile("write2.txt", "again writing in file", (err) => {
      if (err) {
        reject(err);
      }
    });

    fs.readFile("write2.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function callback(data) {
  console.log("Done");
  return data;
}
writeFileAsync()
  .then(callback)
  .then((data) => {
    console.log(data);
  });
