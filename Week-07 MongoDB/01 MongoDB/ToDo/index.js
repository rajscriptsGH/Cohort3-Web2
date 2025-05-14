import express, { json } from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { UserModel, TodoModel } from './db.js'

mongoose.connect("mongodb+srv://rajscripts100x:Fd34oovuyS5NIYsJ@cluster0.mqrp3kn.mongodb.net/todo-razz-6363")
const app = express()
const port = 3000;

const JWT_SECRET = "jdahbjncwihfk"

app.use(express.json())

app.post('/signup', async (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    const age = req.body.age

    await UserModel.create({
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
            id: user._id
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
app.post('/todo', (req, res) => {


})
app.get('/todos', (req, res) => {

})


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);

})