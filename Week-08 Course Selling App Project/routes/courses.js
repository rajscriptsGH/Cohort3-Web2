import { Router } from 'express'
const courseRouter = Router()



courseRouter.post('/purchases', (req, res) => {
    res.json({
        msg: "course purchases endpoint"
    })
})

courseRouter.get('/preview', (req, res) => {
    res.json({
        msg: "course preview endpoint"
    })
})

courseRouter.post('/delete', (req, res) => {
    res.json({
        msg: "delete course' endpoint"
    })
})

export default courseRouter