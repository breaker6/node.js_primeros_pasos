//Importamos la libreria de express
import express from 'express'

//Cargamos una instancia de express dentro de una variable
const app = express()

//Definimos una ruta a la que se accede mediante el metodo get y esta en el raiz
//Recibe dos pàrametros, request y response
app.get('/', (req, res) => {
  //Escribimos cuando el usuario entra un hola mundo para verificar que se está renderizando correctamente
  res.end('Hola Mundo!')
})

//Le decimos a express que escuche el puerto 9000
app.listen('9000', () => {
  //Cuando el servidor arranca nos mostrará el siguiente mensaje
  console.log('Server opened listen on http://localhost:9000')
})