/*
Assignment-

1.create a backend server in nodejs that return the endpoint
2.wtite an html file that hits the backend server using the ferch api
*/

import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const port = 3000;


// These 2 lines are needed to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS
app.use(cors({
    origin: '*',           // or use specific origin: 'http://localhost:5000'
}));

app.use(express.json())

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
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