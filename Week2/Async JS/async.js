
const fs = require('fs')

// function readFile("path", "encoding", callback){
//     //readFile
//     callback("error", "data")
// }

function display(err, data) {
    console.log(data);
}

fs.readFile('a.txt', 'utf-8', display)

setTimeout(() => {
    console.log("SetTime Out");
}, 1000);

fs.readFile('b.txt', 'utf-8', display)

console.log("Done!!");
