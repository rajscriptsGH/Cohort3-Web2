// Create a middleware function that logs each 
// incoming request’s HTTP method, URL, and timestamp to the console


import express from 'express'
const app = express();
const port = 3000;


//middleware that logs the  method, url and time
function logAllInfo(req, rea, next) {
    console.log("Method request: " + req.method);
    console.log(`URL request: https/127.0.0.1:${port}${req.url}`);

    const timestamp = new Date().toISOString();
    console.log("Timestamp: " + timestamp);




    next()


}

app.use(logAllInfo);
app.get("/sum", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a - b
    })
});





app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);

})