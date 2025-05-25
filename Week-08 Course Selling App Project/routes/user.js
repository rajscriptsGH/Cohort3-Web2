import { Router } from 'express'                            //Using ES Module syntax: 
const userRouter = Router()                               //Creating a modular router
import { purchaseModel, userModel } from "../db.js";
import bcrypt from 'bcrypt'
import z from 'zod'
import jwt from 'jsonwebtoken'
import { JWT_USER_PASSWORD } from '../config.js';
import userMiddleware from '../middleware/user.js';


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

    //since I have already hashed password, it cant ne verified using password anymore,

    // 1. Find user by email only
    const user = await userModel.findOne({
        email: email
    })

    if (!user) {
        return res.status(403).json({
            msg: "User not found"
        })
    }

    // 2. Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.status(403).json({
            msg: "Invalid password"
        })
    }

    //  3. sign for JWT token
    const token = jwt.sign({
        id: user._id
    }, JWT_USER_PASSWORD)

    res.json({
        token: token,
        msg: "signed in successfully"
    })
})

userRouter.get('/purchases', userMiddleware, async (req, res) => {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId
    })
    res.json({
        msg: "Your purchased courses",
        purchases
    })
})

//Exporting it for use in your main index.js
export default userRouter