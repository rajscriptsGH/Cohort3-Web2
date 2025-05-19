import { Router } from 'express'
const courseRouter = Router()



courseRouter.post('/', (req, res) => {
    res.json({
        msg: "course endpoint"
    })
})

courseRouter.post('/purchases', (req, res) => {
    res.json({
        msg: "course purchases endpoint"
    })
})
courseRouter.post('/delete', (req, res) => {
    res.json({
        msg: "delete course' endpoint"
    })
})

export default courseRouter