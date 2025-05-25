import { Router } from 'express'
const courseRouter = Router()
import userMiddleware from '../middleware/user.js'

import { courseModel, purchaseModel } from '../db.js'


courseRouter.post('/purchases', userMiddleware, async (req, res) => {
    const userId = req.userId
    const courseId = req.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        msg: "U have successfully purchased course"
    })
})

courseRouter.get('/preview', async (req, res) => {
    const courses = await courseModel.find({})

    res.json({
        msg: "Your courses",
        courses
    })
})

courseRouter.post('/delete', (req, res) => {
    res.json({
        msg: "delete course' endpoint"
    })
})

export default courseRouter