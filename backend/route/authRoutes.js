import Router from 'express'
const router = new Router()
import {check} from 'express-validator'
import authController from "../controllers/authControllers.js"
import roleMiddleware from "../middleware/roleMiddleware.js";

router
    .post('/registration', [check('username', 'Имя пользователя не может быть пустым').notEmpty(), check('password', 'Пароль должен быть длинней 3 символов и не более 10').isLength({min: 3, max: 10})], authController.registration)
    .post('/login', authController.login)
    .get('/users', roleMiddleware(['ADMIN']), authController.getUsers)

export default router