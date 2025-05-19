// import express from 'express'
// const Router = express.Router

import { Router } from 'express'
const userRouter = Router()

userRouter.post('/user/signup', (req, res) => {
    res.json({
        msg: "signup endpoint"
    })
})
userRouter.post('/user/signin', (req, res) => {
    res.json({
        msg: "signin endpoint"
    })
})
userRouter.post('/user/purchases', (req, res) => {
    res.json({
        msg: "user purchases endpoint"
    })
})