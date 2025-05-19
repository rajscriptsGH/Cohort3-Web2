// Organizing routes cleanly under / user/*

// import express from 'express'
// const Router = express.Router


//Using ES Module syntax: 
import { Router } from 'express'
//Creating a modular router
const userRouter = Router()

import { userModel } from '../db.js'

userRouter.post('/signup', (req, res) => {
    res.json({
        msg: "signup endpoint"
    })
})
userRouter.post('/signin', (req, res) => {
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