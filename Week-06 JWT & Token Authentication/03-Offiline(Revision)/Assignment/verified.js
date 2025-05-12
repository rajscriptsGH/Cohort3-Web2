import jwt from 'jsonwebtoken';
const jwtPassword = 'secret';
import zod from 'zod'

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);


function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null
    }
    const signature = jwt.sign({
        username
    }, jwtPassword)
    return signature
}

function verifyJwt(token) {
    // Your code here
    let verified = jwt.verify(token, jwtPassword)
    if (verified) {
        return true;
    } else {
        return false
    }
}
// verifyJwt("ksjwiue ")

function decodeJwt(token) {
    // Your code here
    const decodeed = jwt.decode(token)
    if (decodeed) {
        return true;
    } else {
        return false
    }
}
// decodeed("kfhweodboqewd")

