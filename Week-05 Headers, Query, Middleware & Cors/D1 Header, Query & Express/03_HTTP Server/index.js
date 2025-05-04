/*
Create an HTTP Server
It should have 4 routes

http://localhost:3000/multiply?a=1&b=2
http://localhost:3000/add?a=1&b=2
http://localhost:3000/divide?a=1&b=2
http://localhost:3000/subtract?a=1&b=2

Inputs given at the end after ? are known as query parameters (usually used in GET requests)
The way to get them in an HTTP route is by extracting them from the req argument (req.query.a , req.query.b)
*/


import express from 'express'
const app = express()
const port = 3000;


app.get('/add', (req, res) => {                                  //here we need to pass as localhost:port/sum?a=2&b=3...
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query" })
    }

    const ans = a + b;

    res.json({ ans })
})

app.get('/subtract/:a/:b', (req, res) => {                               //to pass localhost:port/suntract/2/3...
    const a = req.params.a;                                              //change query to params
    const b = req.params.b;
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query" })
    }
    const ans = a - b;

    res.json({ ans })
})

app.get('/multiply', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query" })
    }
    const ans = a * b;

    res.json({ ans })
})

app.get('/divide', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query" })
    }
    const ans = a / b;

    res.json({ ans })
})

app.listen(port, () => {
    console.log(`Server is listening at port:  ${port}`);

})