import 'dotenv/config'

import jwt from 'jsonwebtoken'
import { JWT_ADMIN_PASSWORD } from '../config.js'

export default function adminMiddleware(req, res, next) {
    const token = req.headers.token

    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD)

    if (decoded) {
        req.adminId = decoded.id;
        next()
    } else {
        res.status(403).json({
            msg: "admin are not signed up"
        })
    }
}