import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import courseRouter from './routes/courses.js'
import adminRouter from './routes/admin.js'
import { userMiddleware } from './middleware/user.js'
import { adminMiddleware } from './middleware/admin.js'

const app = express()
const port = 3000;

app.use(express.json())

app.use('/user', userMiddleware, userRouter)
app.use('/admin', adminMiddleware, adminRouter)
app.use('/course', courseRouter)


async function connectMongodb() {
    //use dotenv to store mongodb
    await mongoose.connect('mongodb+srv://rajscripts100x:Fd34oovuyS5NIYsJ@cluster0.mqrp3kn.mongodb.net/10xDev')
    app.listen(port, () => {
        console.log(`Server is running st port: ${port}`);
    })
    console.log("connected");
}

connectMongodb()