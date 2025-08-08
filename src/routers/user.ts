import { Router } from 'express'
import { validateUser, UserRepository } from '../user'

export const userRouter = (db: UserRepository) => {
  const router = Router()

  router.get('/', (req, res) => {
    const isSuccess = req.query?.s == 'true'
    const users = db.getAll()
    return res.render('user/index', { users, isSuccess })
  })

  router.post('/', (req, res) => {
    const user = validateUser(req.body)
    if (user instanceof Error)
      return res.render('user/error', {
        code: '400 (Bad Request)',
        message: user.message,
      })

    const result = db.addOne(user)

    if (result instanceof Error)
      return res.render('user/error', {
        code: '500 (Internal Server Error) ',
        message: result.message,
      })

    return res.redirect('/users?s=true')
  })

  return router
}
