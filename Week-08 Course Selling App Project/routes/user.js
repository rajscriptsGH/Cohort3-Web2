
import { Router } from 'express'                            //Using ES Module syntax: 
const userRouter = Router()                               //Creating a modular router
import { userModel } from "../db.js";
import bcrypt from 'bcrypt'
import z from 'zod'
import jwt from 'jsonwebtoken'
const JWT_USER_PASSWORD = 'ldkflfhid'


userRouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    //Use zod for validation
    const reqBody = z.object({
        email: z.string().email().includes('@'),
        password: z.string().min(6).max(20),
        firstName: z.string().min(3).max(50),
        lastName: z.string().min(3).max(50)
    })

    const parseBodyWithSucess = reqBody.safeParse(req.body)
    if (!parseBodyWithSucess.success) {
        res.status(403).json({
            error: parseBodyWithSucess.error
        })
        return
    }

    //hash the password
    const hashPassword = await bcrypt.hash(password, 5)
    try {
        await userModel.create({
            email: email,
            password: hashPassword,
            firstName: firstName,
            lastName: lastName
        })
    } catch (e) {
        console.log("Error: ", e);

    }
    res.json({
        msg: "User signed up"
    })
});

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    })

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD)

        res.json({
            token: token
        })

    } else {
        res.status(403).json({
            msg: "User not found"
        })
    }
    res.json({
        msg: "signin endpoint"
    })
})
userRouter.get('/purchases', (req, res) => {
    res.json({
        msg: "user purchases endpoint"
    })
})

//Exporting it for use in your main index.js
export default userRouter