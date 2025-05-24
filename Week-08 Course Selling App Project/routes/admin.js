import { Router } from "express";
const adminRouter = Router()
import { adminModel } from "../db.js";
import bcrypt from 'bcrypt'
import z from 'zod'
import jwt from 'jsonwebtoken'
import { JWT_ADMIN_PASSWORD } from "../config.js";
import { adminMiddleware } from "../middleware/admin.js";

adminRouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    //1. Use zod for validation
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

    //2. Hash the password
    const hashPassword = await bcrypt.hash(password, 5)
    try {
        await adminModel.create({
            email: email,
            password: hashPassword,
            firstName: firstName,
            lastName: lastName
        })
    } catch (e) {
        console.log("Error: ", e);
    }

    res.json({
        msg: "Admin signed up"
    })

})
adminRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    //1. Find admin by email only
    const admin = await adminModel.findOne({
        email: email
    })
    if (!admin) {
        return res.status(403).json({
            msg: "Invalid admin"
        })
    }

    //2. Check passward using hash
    const isPasswordValid = await bcrypt.compare(password, admin.password)
    if (!isPasswordValid) {
        return res.status(403).json({
            msg: "Invalid password"
        })
    }

    //3. sign jwt token
    const token = jwt.sign({
        id: admin._id
    }, JWT_ADMIN_PASSWORD)

    res.json({
        token: token,
        msg: "Admin signed in"
    })

})


adminRouter.post('/courses', adminMiddleware, async (req, res) => {
    const adminId = req.userId

    const { title, desc, price, imgUrl } = req.body

    const course = await courseModel.create({
        title: title,
        desc: desc,
        price: price,
        imgUrl: imgUrl,
        adminId: adminId
    })

    res.json({
        msg: "Course created",
        courseId: course._id
    })
})

adminRouter.put('/courses', (req, res) => {


    res.json({
        msg: "Admin put course"
    })
})

adminRouter.get('/courses', (req, res) => {
    res.json({
        msg: "get Admin course"
    })
})
adminRouter.delete('/courses', (req, res) => {
    res.json({
        msg: "Admin delete course"
    })
})

export default adminRouter