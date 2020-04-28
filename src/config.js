//Importamos body-parser
import bodyParser from 'body-parser'
//Importamos el logger morgan
import logger from 'morgan'
//Importamos cors
import cors from 'cors'
//Importamos solo la funcion config de la dependencia dotenv
import { config } from 'dotenv'

//Cargamos la configuracion en la constante settings. Esto guarda toda la informacion del
//fichero de configuracion
const SETTINGS = config()

//Exportamos (la vamos a utilizar fuera) una funcion que por defecto recibirá la instancia del
//servidor creado
export default app => {
  //Desabilitamos el x-powered
  app.disable('x-powered-by')
 
  //Seteamos el entorno de desarrollo. Le decimos que nuestro entorno se define por
  //process.env.NODE_ENV
  //app.set('env', process.env.NODE_ENV)
  //El entorno de desarrollo vendrá definido en la configuracion que esta almacenada en SETTINGS
  app.set('env', SETTINGS.parsed.ENV)
 
  //Seteamos la variable config y le decimos que guarde todos los datos de settings
  app.set('config', SETTINGS.parsed)
  //Le decimos que de forma local el entorno es env (variable seteada arriba)
  app.locals.env = app.get('env')
  //Seteamos el config en el config local
  app.locals.config = app.get('config')

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