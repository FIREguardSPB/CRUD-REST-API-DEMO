import User from '../model/User.js'
import {validationResult} from 'express-validator'
import {checkLogin, checkUserHas, createUser} from "../service/AuthService.js";

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }
            await checkLogin(req.body) //проверка на существующего пользователя
            const newUser = await createUser(req.body) //создание юзера в базе
            const data = [newUser, req.body.username]
            res.status(200).json(data)
        } catch (e) {
            return res.status(400).json(e.message)
        }
    }

    async login(req, res) {
        try {
            const loginCreatedToken = await checkUserHas(req.body)
            // console.log(req.body.username)
            const data = [loginCreatedToken, req.body.username]
            res.status(200).json(data)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

//функция получения юзеров только для админа
    async getUsers(req, res) {
        try {
            const listUsers = await User.find()
            return res.status(200).json(listUsers)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new authController()