//Importamos la libreria http
import http from 'http'

//Creamos el servidor que recibe una petición y devuelve una respuesta
const server = http.createServer((request, response) => {
  response.write('<h1>Curso NodeJS de OpenWebinars!</h1>')
  response.end()
})

//Definimos donde esta el servidor. 8000 es el puerto
server.listen(8000, 'localhost', err => {
  //Si se produce un error saldremos y mostraremos un mensaje  
  if (err) {
    return console.log('Error: ', err)
  }
  //Si el servidor funciona, lo mostraremos por pantalla
  console.log('Server opened listen on http://localhost:8000')
})