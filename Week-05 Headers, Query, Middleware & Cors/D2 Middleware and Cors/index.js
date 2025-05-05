
import express from 'express'
const app = express()
const port = 3000;

let requestCount = 0;

/*
//middleware
1. it may or may not change the request object
2. it will 
    -either stop the request right there 
    -or forward the request to the real route handler
  */
function requestIncrease(req, res, next) {
    requestCount = requestCount + 1;
    req.name = "razzzzzzzzz";
    console.log("Total num of requests = " + requestCount);
    next();
}

function realSumHandler(req, res) {
    // requestIncrease()                                 //this function is added as middleware
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    console.log(req.name);

    const ans = a + b;
    res.json({ ans })
}

// app.use(realSumHandler)                               //global middleware
app.get('/add', requestIncrease, realSumHandler);


app.listen(port, () => {
    console.log(`Server is listening at port:  ${port}`);

})