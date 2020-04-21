//Importamos la libreria http
import http from 'http'

//Creamos el servidor que recibe una petición y devuelve una respuesta
const server = http.createServer((request, response) => {
  //response.write('<h1>Curso NodeJS de OpenWebinars!</h1>')
  //response.end()
  //Escribimos la cabecera del documento y definimos los parametros
  //a enviar. Los parametros son 200 (todo ha ido bien) y el tipo de
  //respuesta que envia (en este caso un html con codificacion UTF8)
  response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
  //Si la petición se está haciendo con un GET escribimos Metodo valido
  if (request.method === 'GET') {
    response.write('<h1>Metodo valido</h1>')
    return response.end()
  }

  //Si no la ahcemos con GET, diremos metodo no valido
  response.write('<h1>Esta intentando acceder con un metodo no valido</h1>')
  return response.end()
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