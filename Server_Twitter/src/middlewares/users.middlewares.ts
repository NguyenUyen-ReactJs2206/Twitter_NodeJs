import { Request, Response, NextFunction } from 'express'

export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  //lay email va password tuw body nguoi dung gui len
  const { email, password } = req.body
  //Neu ko la email va password thi tra ve error
  if (!email || !password) {
    return res.status(400).json({
      error: 'Missing email or password'
    })
  }
  next()
}
