//Importamos express
import express from 'express'

//Importamos el archivo mocks que es el que tendrá la información a leer
import mocks from '../../mocks'

import { auth } from '../middlewares'

//Usamos el router de express
const router = express.Router()

//Creamos la ruta / que será accesible mediante get y post
router
  .get('/', (req, res, next) => {
    //Devolvemos el estado 200 y un json
    res
      .status(200)
      .json(mocks)
  })
  .post('/', auth, (req, res, next) => {
    console.log('Body received:', req.body)
    //Devolvemos el estado 201 y un json
    res
      .status(201)
      .json(req.body)
  })

//Creamos una ruta que recibirá el nombre de un cantante
router.get('/:singer', (req, res, next) => {
  console.log('a', req.params.singer)
  //Le decimos que guarde la informacion del cantante almacenada en el archivo mocks
  const songsBySingers = mocks
    .filter(item =>
      item.singer.toLowerCase() === req.params.singer.toLowerCase()
    )

  //Le decimos que devuelva la informacion que ha leido en forma de json
  res
    .status(200)
    .json(songsBySingers)
})

//Exportamos el router
export default router