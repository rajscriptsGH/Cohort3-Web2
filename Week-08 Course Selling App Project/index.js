import 'dotenv/config'

import express from 'express'
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


async function connectMongodb() {
    //use dotenv to store mongodb
    await mongoose.connect(process.env.MONGODB_URL)
    app.listen(port, () => {
        console.log(`Server is running st port: ${port}`);
    })
    console.log("connected");
}

connectMongodb()