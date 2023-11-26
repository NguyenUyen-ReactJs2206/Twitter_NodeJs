import { Router } from 'express'
import { loginValidator, registerValidator } from '../middlewares/users.middlewares'
import { loginController, registerController } from '../controllers/users.controllers'

const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
/**
 * Register a new user
 * Path: /register
 * Method: POST
 * Body: {name:string,email:string, password:string, date_of_birth: ISO8601,
 * confirm_password: string}
 */

usersRouter.post(
  '/register',
  registerValidator,
  (req, res, next) => {
    console.log('request handler 1')
    next()
  },
  (req, res, next) => {
    console.log('request handler 2')
    next()
  },
  (req, res, next) => {
    console.log('request handler 2')
    res.json({ message: 'Register success' })
  }
)

usersRouter.post('/register', registerValidator, registerController)

export default usersRouter
