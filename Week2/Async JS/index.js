const fs = require("fs");

// const content = fs.readFileSync("a.txt", "utf-8");
// console.log(content);

// const content2 = fs.readFileSync("b.txt", "utf-8");
// console.log(content2);

fs.readFile("b.txt", 'utf-8', function (err, content) {
    console.log(content);
})
