//Importamos la libreria de express
import express from 'express'
//Importamos body-parser.Es un middleware que parsea de forma automatica la respuesta del servidor
//metiendola en un campo body dentro del response
import bodyParser from 'body-parser'
//Importamos la libreria morgan. Morgan esta pensado como middleware
import logger from 'morgan'
//Importamos la libreria requerida para rutas
import path from 'path'

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
//Definimos una ruta a la que se accede mediante el metodo get y esta en el raiz
//Recibe dos pàrametros, request y response
//app.get('/', (req, res) => {
  //Buscará e intentará renderizar un archivo home.pug
  //res.render('home')
  //Renderizamos homeVars.pug pasandole las variables title y message
  //res.render('homeVars', { title: 'Mi primera página en Node!', message: 'Mis primeras pruebas!' })
//})

//Ejemplo de ruta a raiz escribiendo codigo html y con enlace a nueva ruta
app.get('/', (req, res, next) => {
    res.write(`
      <h1>Mi primera página en Node!</h1>
      <a href="/indice">Indice</a>
    `)
    //Renderizamos una pagina que queramos
    //res.render('home')
    res.end()
  })
  
  //Ejemplo de ruta dentro de raiz
  app.get('/indice', (req, res, next) => {
    res.write(`
      <h1>Mi primera página en Node!</h1>
      <h2>Indice de la web</h2>
    `)
    //Renderizando paginas que queramos con variables
    //res.render('homeVars', { title: 'Open Webinars!', message: 'Bienvenido Banylin Monroe!' })
    //res.end()
  })

//Le decimos a express que escuche el puerto 9000
app.listen('9000', () => {
  //Cuando el servidor arranca nos mostrará el siguiente mensaje
  console.log('Server opened listen on http://localhost:9000')
})