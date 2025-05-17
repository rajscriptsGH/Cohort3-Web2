import express, { json } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'                            //import for auth
import { auth, JWT_SECRET } from './auth.js'              //imported from auth file to get token here
import mongoose from 'mongoose'                           //database
import { UserModel, TodoModel } from './db.js'            //Model imported

import z from 'zod'

await mongoose.connect("mongodb+srv://rajscripts100x:Fd34oovuyS5NIYsJ@cluster0.mqrp3kn.mongodb.net/todo-razz-6363")
const app = express()
const port = 3000;

app.use(express.json())

app.post('/signup', async (req, res) => {
    try {
        //Schema for zod
        const reqBody = z.object({
            username: z.string().min(4).max(100).email(),
            password: z.string().min(4).max(20),
            name: z.string().min(4).max(100),
            age: z.number()
        })

        //parsing for zod
        // const parseData = reqBody.parse(req.body);
        const parseDataWithSuccess = reqBody.safeParse(req.body);

        if (!parseDataWithSuccess.success) {
            res.json({
                msg: "Invalid input",
                error: parseDataWithSuccess.error
            })
            return
        }

        const username = req.body.username
        const password = req.body.password
        const name = req.body.name
        const age = req.body.age

        // //ugly way to validate
        // if (typeof username !== 'string' || username.length < 5 || !username.includes('@')) {
        //     res.json({
        //         msg: "Incorrect email"
        //     })
        //     return
        // }



        //Hashing

        const hashedPassword = await bcrypt.hash(password, 5)
        console.log(hashedPassword);

        //data insert here
        await UserModel.create({
            username: username,
            password: hashedPassword,
            age: age,
            name: name
        });

        res.json({
            username: username,
            msg: "U are signed up"
        })

    } catch (e) {
        res.status(500).json({
            msg: "Error while signing up"
        })
    }
})
app.post('/signin', async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await UserModel.findOne({
        username: username, //get me the user with this email
    })

    //if email not matched, error
    if (!user) {
        res.status(403).json({
            msg: "User not found"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (passwordMatch) {
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