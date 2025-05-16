import express, { json } from 'express'
import jwt from 'jsonwebtoken'                                        //import for auth
import { auth, JWT_SECRET } from './auth.js'                          //imported from auth file to get token here
import mongoose from 'mongoose'                                       //database
import { UserModel, TodoModel } from './db.js'                        //Model imported

await mongoose.connect("mongodb+srv://rajscripts100x:Fd34oovuyS5NIYsJ@cluster0.mqrp3kn.mongodb.net/todo-razz-6363")
const app = express()
const port = 3000;



app.use(express.json())

app.post('/signup', async (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    const age = req.body.age

    await UserModel.create({                              //this return promise, so have to await
        username: username,
        password: password,
        age: age,
        name: name
    })
    res.json({
        username: username,
        msg: "U are signed up"
    })
})
app.post('/signin', async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await UserModel.findOne({
        username: username,
        password: password
    })

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(403).json({
            msg: "Wrong credentials"
        })
    }
    console.log(user);
})
app.post('/todo', auth, async (req, res) => {
    const userId = req.userId
    const username = req.body.username
    const name = req.body.name
    const age = req.body.age


    await TodoModel.create({
        userId,
        username,
        name,
        age
    })

    res.json({
        msg: "Todo created"
    })
})
app.get('/todos', auth, async (req, res) => {
    const userId = req.userId
    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos
    })
})



app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);

})