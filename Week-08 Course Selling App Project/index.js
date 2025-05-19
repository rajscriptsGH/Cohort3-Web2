import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import courseRouter from './routes/courses.js'
const app = express()
const port = 3000;

app.use(express.json())

app.use('/user', userRouter)
app.use('/course', courseRouter)


app.listen(port, () => {
    console.log(`Server is running st port: ${port}`);
})