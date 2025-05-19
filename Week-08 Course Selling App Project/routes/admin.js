import { Router } from "express";
const adminRouter = Router()

adminRouter.post('/signup', (req, res) => {
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