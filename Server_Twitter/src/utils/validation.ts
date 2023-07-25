import express from 'express'
import { body, validationResult, ValidationChain } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/src/middlewares/schema'
// can be reused by many routes

// sequential processing, stops running validations chain if the previous one fails.
export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    //thuc hien validate va check loi
    await validation.run(req)
    //Lay loi ra
    const errors = validationResult(req)
    //Neu ko co loi
    if (errors.isEmpty()) {
      return next()
    }
    //Co loi
    res.status(400).json({ errors: errors.mapped() })
  }
}
