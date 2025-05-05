
import express from 'express'
const app = express()
const port = 3000;

let requestCount = 0;

//middleware
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

app.get('/add', requestIncrease, realSumHandler);




app.listen(port, () => {
    console.log(`Server is listening at port:  ${port}`);

})