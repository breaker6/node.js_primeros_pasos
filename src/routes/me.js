//Importamos express para usar su funcion router
import express from 'express'

//Usaremos como router express.Router()
const router = express.Router()

//Nos definimos la ruta get /
router.get('/', (req, res, next) => {
  //Esta ruta devuelve un codigo de estado 200 y un json con datos
  res
    .status(200)
    .json({
      name: 'Fernando',
      lastname: 'Beltrán'
    })
})

//Exportamos el router
export default router