//Importamos la libreria http
import http from 'http'
//Importamos la libreria para leer ficheros
import fs from 'fs'

//Le decimos cual será el fichero que deberá ller
const file = './src/index.html'
//Creamos el servidor que recibe una petición y devuelve una respuesta
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html; charset:UTF-8'
  })
  //Leemos el fichero recibiendo un error o un contenido (que será file)
  fs.readFile(file, (err, content) => {
    if (err){
      return console.log(err)
    }
    //Si no hay error, mandaremos content como resupuesta y cerraremos la respuesta
    response.write(content)
    response.end()
  })
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