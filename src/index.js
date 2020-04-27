//Importamos la libreria de express
import express from 'express'
//Importamos body-parser.Es un middleware que parsea de forma automatica la respuesta del servidor
//metiendola en un campo body dentro del response
import bodyParser from 'body-parser'
//Importamos la libreria morgan. Morgan esta pensado como middleware
import logger from 'morgan'
//Importamos la libreria requerida para rutas
import path from 'path'
//Importamos la libreria que gestiona el enrutado
import router from './router'

//Cargamos una instancia de express dentro de una variable
const app = express()

//Desactivar el aviso de que nuestra web esta hecho con express en la cabecera del servidor
app.disable('x-powered-by')

//Le definimos que en el entorno en el que estamos es development
app.set('env', 'development')

//Genera un log que nos dará una serie de datos en el servidor. Combined es el tipo de log
app.use(logger('combined'))
//Le decimos que use body-parser y que devuelva un json
app.use(bodyParser.json())
//Le decimos que el codificado no sea extendido
app.use(bodyParser.urlencoded({ extended: false }))

//Le decimos en que ruta están las vistas a utilizar. Este será el resultado de concatenar
//el directorio actual en el que estamos mas views
app.set('views', path.join(__dirname, 'views'))
//Le definimos que el motor de plantillas a utilizar (view engine). En este caso es pug
app.set('view engine', 'pug')

//RUTAS
router(app)

//Le decimos que cuando detecte una petición a /static tiene que devolver un archivo del
//directorio public. Gracias a esto podremos cargar el css.
app.use(
  '/static',
  express.static(path.join(__dirname, 'public'))
)

//Ejecutaremos esta ruta si se accede a una ruta no definida
app.use((req, res, next) => {
  res.render('404', {
    title: 'NodeJS',
    message: `La ruta no existe!!!!!`
  })
  next(err)
})

//Le decimos a express que escuche el puerto 9000
app.listen('9000', () => {
  //Cuando el servidor arranca nos mostrará el siguiente mensaje
  console.log('Server opened listen on http://localhost:9000')
})