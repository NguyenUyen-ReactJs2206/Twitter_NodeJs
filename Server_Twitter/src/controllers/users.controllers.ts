import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import usersService from '../services/users.services'
import { RegisterReqBody } from '../models/requests/User.requests'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'uyen@gmail.com' && password === '123456') {
    return res.status(200).json({
      message: 'Login success'
    })
  }
  return res.status(400).json({
    error: 'Login failed'
  })
}
export const registerControler = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    //Goi den DB- service
    const result = await usersService.register(req.body)

    return res.json({
      message: 'Register success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Register failed',
      error
    })
  }
}
