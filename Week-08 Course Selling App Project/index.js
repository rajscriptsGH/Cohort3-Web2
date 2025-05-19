import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import courseRouter from './routes/courses.js'
import adminRouter from './routes/admin.js'

const app = express()
const port = 3000;

app.use(express.json())

app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/course', courseRouter)


app.listen(port, () => {
    console.log(`Server is running st port: ${port}`);
})