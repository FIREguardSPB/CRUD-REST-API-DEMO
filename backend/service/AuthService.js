import Role from "../model/Role.js";
import User from "../model/User.js";
import bcrypt from 'bcryptjs'
import generateAccessToken from "../utils/authUtuls.js";


export async function checkLogin(body) {
    const {username} = body
    const candidat = await User.findOne({username})
    if (candidat) {
        throw new Error('user already exists')
    }
}

//регситрация нвоого пользователя
export async function createUser(body) {
    const {username, password} = body
    const hashPassword = bcrypt.hashSync(password, 4)
    const userRole = await Role.findOne({value: "USERS"})
    const user = new User({username, password: hashPassword, roles: [userRole.value]})
    await user.save()
    //генерация токена
    const tokenUser = await User.findOne({username})
    return generateAccessToken(tokenUser._id, tokenUser.roles, tokenUser.username)
}

//проверка входных данных и генерация токена
export async function checkUserHas(body) {
    const {username, password} = body
    const user = await User.findOne({username})
    if (!user) {
        throw new Error(`Пользователь '${username}' в системе не зарегистрирован`)
    }
    const validatePassword = bcrypt.compareSync(password, user.password)
    if (!validatePassword) {
        throw new Error(`Пароль не верный`)
    }
    return generateAccessToken(user._id, user.roles, user.username)
}
