import express from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = "randomthings"
const app = express();
const port = 3000;

app.use(express.json())                        //Use express.json as a middleware to parse the post request body


const users = [];                                   //to store the user data

//while converting token to jwt, get rid of this function
// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }


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
        const token = jwt.sign({                               //this id neede for jwt   
            username: username
        }, JWT_SECRET)

        // const token = generateToken();                         //this is needed for token   
        // user.token = token;               //store token in users for user
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            msg: "Invalid username or password"
        })
    }
    console.log(users);

})

app.get('/me', (req, res) => {
    const token = req.headers.token;                               //now it will return jwt not token
    const decodeInformation = jwt.verify(token, JWT_SECRET)       // {usrname: xyz.gmailcom}

    const username = decodeInformation.username

    //now username is used to decode, so usename will be used to get all
    const user = users.find((u) => {
        if (u.username == username) {
            return true;
        } else {
            return false;
        }
    })

    //earlier it used to return token, so token was used to get all
    // const user = users.find((u) => {
    //     if (u.token == token) { 
    //         return true;
    //     } else {
    //         return false;
    //     }
    // })

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