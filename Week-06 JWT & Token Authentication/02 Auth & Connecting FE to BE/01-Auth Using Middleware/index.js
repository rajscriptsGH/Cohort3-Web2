import express from 'express'
import jwt from 'jsonwebtoken'
const JWT_SECRET = "randomthings"
const app = express();
const port = 3000;

app.use(express.json())


const users = [];

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: "You are signed up"
    })
    console.log(users);

})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) => {
        if (u.username == username && u.password == password) {
            return true;
        } else {
            return false;
        }
    })

    if (user) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)

        res.json({
            token: token,
            msg: "Signed in"
        })
    } else {
        res.status(403).send({
            msg: "Invalid username or password"
        })
    }
    console.log(users);
})

//this route will return the user info only id they are signed in, upon calling
app.get('/me', (req, res) => {
    const token = req.headers.token;                               //now it will return jwt not token
    const decodeInformation = jwt.verify(token, JWT_SECRET)       // after converting username to jwt, it will verify it and return if matched 

    const username = decodeInformation.username

    //now username is used to decode, so usename will be used to get all
    const user = users.find((u) => {
        if (u.username == username) {
            return true;
        } else {
            return false;
        }
    })

    if (user) {
        res.json({
            username: user.username,
            password: user.password
        })
    } else {
        res.json({
            msg: "Invalid token"
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);

})