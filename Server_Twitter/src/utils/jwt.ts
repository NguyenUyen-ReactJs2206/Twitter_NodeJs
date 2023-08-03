import jwt, { SignOptions } from 'jsonwebtoken'

export const signToken = ({
  payload,
  priviateKey = process.env.JWT_SECRET as string,
  options = {
    algorithm: 'HS256'
  }
}: {
  payload: string | Buffer | object
  priviateKey?: string
  options?: SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, priviateKey, options, (error, token) => {
      if (error) {
        throw reject(error)
      }
      resolve(token as string)
    })
  })
}

// signToken({
//   payload: {},
//   options: {
//     algorithm: 'RS256'
//   }
// })
