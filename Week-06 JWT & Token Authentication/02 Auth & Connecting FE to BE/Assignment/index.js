/*
Can you try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn’t logged in?
*/

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


})


app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) => {
        if (u.username === username && u.password === password) {
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

function auth(req, res, next) {
    const token = req.headers.token
    if (!token) {
        return res.status(401).json({
            msg: "Token missing"
        })
    }
    const decodeData = jwt.verify(token, JWT_SECRET)
    if (req.user = decodeData) {
        next();
    } else {
        res.json({
            msg: "Invalid inputs"
        })
    }
}

app.get('/me', auth, (req, res) => {
    const user = users.find((u) => {
        if (u.username == req.user.username) {
            return true;
        } else {
            return false;
        }
    })

    if (user) {
        res.json({
            username: user.username,
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);

})