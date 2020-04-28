//Importamos body-parser
import bodyParser from 'body-parser'
//Importamos el logger morgan
import logger from 'morgan'
//Importamos cors
import cors from 'cors'

//Exportamos (la vamos a utilizar fuera) una funcion que por defecto recibirá la instancia del
//servidor creado
export default app => {
  //Desabilitamos el x-powered
  app.disable('x-powered-by')
 
  //Seteamos el entorno de desarrollo. Le decimos que nuestro entorno se define por
  //process.env.NODE_ENV
  app.set('env', process.env.NODE_ENV)

  //Desactivamos el logger en caso de los test
  if (process.env.NODE_ENV !== 'test') {
    //Usamos el formato de log combined que es el mas completo
    app.use(logger('combined'))
  }

  //Parsearenis todos los logs que nos lleguen a un formato visible
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
 
  //Usamos cors. Cors permite configurar de forma automatica las cabeceras de la aplicacion
  app.use(cors())
}