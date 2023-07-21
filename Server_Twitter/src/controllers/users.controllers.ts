import { Request, Response } from 'express'
import databaseService from '../services/database.services'
import User from '../models/schemas/User.schema'

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
export const registerControler = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    //Goi den DB
    const result = await databaseService.users.insertOne(
      new User({
        email,
        password
      })
    )
    console.log('result', result)
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
