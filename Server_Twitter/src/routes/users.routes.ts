import { Router } from 'express'
import { loginValidator, registerValidator } from '../middlewares/users.middlewares'
import { loginController, registerControler } from '../controllers/users.controllers'

const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
/**
 * Register a new user
 * Path: /register
 * Method: POST
 * Body: {name:string,email:string, password:string, date_of_birth: ISO8601,
 * confirm_password: string}
 */
usersRouter.post('/register', registerValidator, registerControler)

export default usersRouter
