import { Router } from 'express'
const userRouter = Router()

userRouter.use(
  (req, res, next) => {
    console.log('Time:', Date.now())
    // khong next() la ko cho req tiep tuc chay nua nen phai next()
    //su dung midleware phai co next de postman tra res ve
    next()
    //Neu ko co next() thi tra ve :
    // res.status(400).send('Not allowed')
  },
  (req, res, next) => {
    console.log('Time:', Date.now())
    next()
  }
)
userRouter.get('/tweets', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'hello world'
      }
    ]
  })
})

export default userRouter
