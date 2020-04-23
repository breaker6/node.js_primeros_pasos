//Importamos la libreria de express
import express from 'express'
//Importamos body-parser.Es un middleware que parsea de forma automatica la respuesta del servidor
//metiendola en un campo body dentro del response
import bodyParser from 'body-parser'
//Importamos la libreria morgan. Morgan esta pensado como middleware
import logger from 'morgan'

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

//Definimos una ruta a la que se accede mediante el metodo get y esta en el raiz
//Recibe dos pàrametros, request y response
app.get('/', (req, res) => {
  //Cuando el servidor arranca nos mostrará el siguiente mensaje
  res.end('Hola Mundo!')
})

//Le decimos a express que escuche el puerto 9000
app.listen('9000', () => {
  //Cuando el servidor arranca nos mostrará el siguiente mensaje
  console.log('Server opened listen on http://localhost:9000')
})