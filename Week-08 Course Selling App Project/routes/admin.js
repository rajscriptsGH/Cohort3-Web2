import { Router } from "express";
const adminRouter = Router()
import { adminModel, courseModel } from "../db.js";
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
    const adminId = req.adminId

    const { title, desc, price, imgUrl } = req.body

    try {
        const course = await courseModel.create({
            title: title,
            desc: desc,
            price: price,
            imgUrl: imgUrl,
            createrId: adminId
        })

        res.json({
            msg: "Course created",
            courseId: course._id
        })
    } catch (error) {
        console.error("Creation error", error)
        res.status(500).json({ msg: "Server error" });
    }
})

//Update a course
adminRouter.put('/courses', adminMiddleware, async (req, res) => {
    const adminId = req.adminId

    const { title, desc, price, imgUrl, courseId } = req.body

    const course = await courseModel.updateOne({
        _id: courseId,            //Match course by id
        creatorId: adminId          //ensure admin is the creater of course
    }, {
        title: title,
        desc: desc,
        price: price,
        imgUrl: imgUrl,
    })

    res.json({
        msg: "Course updated",
        createrId
    })
})

adminRouter.get('/courses', adminMiddleware, async (req, res) => {
    const adminId = req.adminId;

    const courses = await courseModel.find({
        createrId: adminId
    })

    res.json({
        msg: "get Admin course",
        courses: courses
    })
})
adminRouter.delete('/courses', (req, res) => {
    res.json({
        msg: "Admin delete course",
        courses: courses
    })
})

export default adminRouter