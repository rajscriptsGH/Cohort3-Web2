import { Router } from "express";
const adminRouter = Router()
import { userModel } from "../db.js";
import bcrypt from 'bcrypt'
import z from 'zod'


adminRouter.post('/signup', async (req, res) => {
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
            // msg: 'Invalid credentials'
            error: parseBodyWithSucess.error
        })
        return
    }

    //hash the password
    const hashPassword = await bcrypt.hash(password, 5)

    await userModel.create({
        email: email,
        password: hashPassword,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        msg: "Admin signup"
    })

})
adminRouter.post('/signin', (req, res) => {
    res.json({
        msg: "Admin signin"
    })
})

// adminRouter.use(checkAdminMiddleware)

adminRouter.post('/courses', (req, res) => {
    res.json({
        msg: "Admin course"
    })
})
adminRouter.get('/courses', (req, res) => {
    res.json({
        msg: "get Admin course"
    })
})
adminRouter.put('/courses', (req, res) => {
    res.json({
        msg: "Admin put course"
    })
})
adminRouter.delete('/courses', (req, res) => {
    res.json({
        msg: "Admin delete course"
    })
})

export default adminRouter