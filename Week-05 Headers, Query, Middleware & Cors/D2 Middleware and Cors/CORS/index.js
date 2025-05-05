/*
Assignment-

1.create a backend server in nodejs that return the endpoint
2.wtite an html file that hits the backend server using the ferch api
*/

import express from 'express'
const app = express();
const port = 3000;

app.use(express.json())

app.post('/sum', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log(req.body);


    res.json({ ans: a + b })
})



app.listen(port, () => {
    console.log(`Server is running at port ${port}`);

})