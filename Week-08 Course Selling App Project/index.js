import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import userRouter from './routes/user'
import courseRouter from './routes/courses'
const app = express()
const port = 3000;

app.use(express.json())


app.post('/user', userRouter)
app.post('/course', courseRouter)





app.listen(port, () => {
    console.log(`Server is running st port: ${port}`);
})