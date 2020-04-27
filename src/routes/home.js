import express from 'express'

//Le decimos a express que dentro de la variable router introduciremos rutas
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('home', {
    title: 'NodeJS',
    message: 'Primeros pasos en NodeJS'
  })
})

export default router