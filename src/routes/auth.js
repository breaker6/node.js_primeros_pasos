//Importamos express
import express from 'express'
//Importamos la libreria del token
import jwt from 'jwt-simple'

//Creamos el router
const router = express.Router()

//Creamos la ruta
router
  .post('/', (req, res, next) => {
    //Guardamos como payload un objeto llamado email que obtendremos de params
    const payload = {
      email: req.params.email
    }

    //Devolveremos en una response el token que vamos a generar con el payload y con la clave
    //secreta que hemos creado
    return res
      .status(200)
      .send({ token: jwt.encode(payload, req.app.locals.config.TOKEN) })
  })

//Exportamos el router
export default router