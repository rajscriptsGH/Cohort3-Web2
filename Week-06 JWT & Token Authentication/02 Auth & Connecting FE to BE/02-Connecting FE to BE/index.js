import express from 'express'
import jwt from 'jsonwebtoken'
const JWT_SECRET = "randomthings"
const app = express()
const port = 3000;

app.use(express.json())
//a array to store users => testing..
const users = []

//route-> signup
app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({ username, password })

    res.json({
        msg: "u are signed up"
    })
    console.log(users);

})

//route-> signin
app.post('/signin', (req, res) => {
    //get username, password
    const username = req.body.username
    const password = req.body.password

    //check if this is same user or not who signed up
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
            msg: "Invalid user"
        })
    }
})

app.get('/me', (req, res) => {
    // get the token
    const token = req.headers.token;
    //verify and decode the token
    const decodeInfo = jwt.verify(token, JWT_SECRET)
    //extract the user info from token
    const username = decodeInfo.username

    //get username from database/array
    const user = users.find(u => u.username == username)

    if (user) {
        res.json({
            username: username
        })
    } else {
        res.status(404).json({
            msg: "User not found"
        });
    }
})


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);

})