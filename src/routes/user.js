import express from 'express'

const router = express.Router()

router.get('/:user', (req, res, next) => {
  res.render('user', {
    title: 'NodeJS',
    message: `Bienvenido usuario ${req.params.user}`
  })
})

export default router