
//normal function
function sum(a, b) {
    return a + b;
}

//arrow function
const sum = (a, b) => {
    return a + b;
}


app.get('/', function (req, res) {
    //code
})

app.get('/', (req, res) => {
    //code
})


const ans = sum(3, 4)
console.log(ans);
