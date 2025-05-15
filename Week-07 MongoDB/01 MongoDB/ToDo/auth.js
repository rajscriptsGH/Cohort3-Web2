import jwt from 'jsonwebtoken'
export const JWT_SECRET = "jdahbjncwihfk"

export function auth(req, res, next) {
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_SECRET)

    if (decoded) {
        req.userId = decoded.id
        next()
    } else {
        res.status(403).json({
            msg: "Incorrect credentials"
        })
    }
}

// export default auth