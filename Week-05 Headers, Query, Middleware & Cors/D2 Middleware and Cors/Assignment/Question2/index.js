/*
Create a middleware that counts total number of requests
 sent to a server. Also create an endpoint that exposes it
*/

import express from 'express'
const app = express();
const port = 3000;

//create a middleware that will count no of requests
let requestCount = 0;
function noOfRequest(req, res, next) {
    requestCount = requestCount + 1;

    next()
}
// app.use(noOfRequest)                 //golobal middleware, i don't need to add middleware in handler again

app.get('/sum', noOfRequest, (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    console.log(requestCount);            //this to see no of req on my terminal


    res.json({
        ans: a + b
    })
})

app.get('/req-count', (req, res) => {
    res.json({
        totalReqCount: requestCount          //this is for the visibility of no of req for client
    })
})


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);

})