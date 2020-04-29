//Importamos la libreria del token
import jwt from 'jwt-simple'

//Exportamos una variable llamada auth que recibe request, response y next
export const auth = (req, res, next) => {
  //Si la peticion http que nos estan enviando tiene como cabecera un authorization
  if (!req.headers.authorization) {
    //Si la cabecera no tiene autentificacion, mandaremos el codigo 403 y el mensaje un
    //autentificado
    return res
      .status(403)
      .send({ message: 'No authenticate' })
  }
 
  //Si continua la ejecución, generamos el token y lo dividimos por espacios
  const token = req.headers.authorization.split(' ')[1]
  //Generamos un payload que decodifique el token enviado. Usaremos una variable de entorno TOKEN
  const payload = jwt.decode(token, req.app.locals.config.TOKEN)

  //Definimos una request user que será igual al payload.email
  req.user = payload.email

  next()
}