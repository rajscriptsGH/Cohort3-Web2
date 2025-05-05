import express from 'express'
const app = express();

app.use(express.json())

app.post('/sum', (req, res) => {
    const data = req.body;
    console.log('Received data:', data)

    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    // res.send("Recieved")
    const ans = a + b;

    res.json({
        ans
    })
})



app.listen(3000, () => {
    console.log("Server is listening at port: 3000");

});