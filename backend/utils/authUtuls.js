import jwt from 'jsonwebtoken'

export default function generateAccessToken (id, roles){
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, process.env.secret, {expiresIn: 86400000, algorithm: "HS256"})
}