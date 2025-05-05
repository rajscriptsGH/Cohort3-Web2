
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


app.get('/multiply', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query" })
    }
    const ans = a * b;

    res.json({ ans })
})



app.listen(port, () => {
    console.log(`Server is listening at port:  ${port}`);

})