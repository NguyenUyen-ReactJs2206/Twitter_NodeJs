import { Router } from 'express'
import { loginValidator } from '../middlewares/users.middlewares'
import { loginController, registerControler } from '../controllers/users.controllers'
const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
usersRouter.post('/register', registerControler)

export default usersRouter
