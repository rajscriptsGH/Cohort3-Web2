import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
const app = express()
const port = 3000;

app.use(express.json())

app.post('/user/signup', (req, res) => {
    res.json({
        msg: "signup endpoint"
    })
})
app.post('/user/signin', (req, res) => {
    res.json({
        msg: "signin endpoint"
    })
})
app.post('/course', (req, res) => {
    res.json({
        msg: "course endpoint"
    })
})
app.post('/course/purchases', (req, res) => {
    res.json({
        msg: "course purchases endpoint"
    })
})
app.post('/user/purchases', (req, res) => {
    res.json({
        msg: "user purchases endpoint"
    })
})
app.post('/delete/course', (req, res) => {
    res.json({
        msg: "delete course' endpoint"
    })
})





app.listen(port, () => {
    console.log(`Server is running st port: ${port}`);
})