import { Request, Response, NextFunction } from 'express'
import { checkSchema } from 'express-validator'
import { validate } from '../utils/validation'

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

export const registerValidator = validate(
  checkSchema({
    name: {
      //ko trong
      notEmpty: true,
      isString: true,
      isLength: {
        options: {
          max: 100,
          min: 1
        }
      },
      //loai bo khoang trang o truoc va sau
      trim: true
    },
    email: {
      notEmpty: true,
      isEmail: true,
      trim: true
    },
    password: {
      notEmpty: true,
      isLength: {
        options: {
          min: 6,
          max: 50
        }
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        }
      }
    },
    confirm_password: {
      notEmpty: true,
      isLength: {
        options: {
          min: 6,
          max: 50
        }
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        }
      }
    },
    date_of_birth: {
      isISO8601: {
        options: {
          strict: true,
          strictSeparator: true
        }
      }
    }
  })
)
