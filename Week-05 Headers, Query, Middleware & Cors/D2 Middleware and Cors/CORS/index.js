/*
Assignment-

1.create a backend server in nodejs that return the endpoint
2.wtite an html file that hits the backend server using the ferch api
*/

import express from 'express'
import cors from 'cors'


const app = express();
const port = 3000;



// Enable CORS
app.use(cors())

app.use(express.json())

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname, '/index.html');
});

app.post('/sum', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log(req.body);


    res.json({ ans: a + b })
})



app.listen(port, () => {
    console.log(`Server is running at port ${port}`);

})


/*

-to use cors => first import it => npm install cors
- app.use(cors()) => this is allow all frontend to send req to ur backend

-app.use(cors(
    Domain:["http:/host", "https:/google.com"]
))
*/