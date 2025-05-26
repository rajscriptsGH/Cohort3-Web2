import 'dotenv/config'

import jwt from 'jsonwebtoken'
import { JWT_USER_PASSWORD } from '../config.js'

export default function userMiddleware(req, res, next) {
    const token = req.headers.token

    const decoded = jwt.verify(token, JWT_USER_PASSWORD)

    if (decoded) {
        req.userId = decoded.id;   // this is came from signin decoded function
        next()
    } else {
        res.status(403).json({
            msg: "u are not signed up"
        })
    }
}