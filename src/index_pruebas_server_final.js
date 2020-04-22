//Importamos la libreria http
import http from 'http'
//Importamos la libreria para leer ficheros
import fs from 'fs'
//Importamos la libreria de rutas
import path from 'path'

const server = http.createServer((request, response) => {
   //Definimos un path que viene definido por la ruta
   let filePath = request.url
   //Si filePath que estoy utilizando es '/' usaremos index.html
   if (filePath === '/'){
       filePath = 'index.html'
   }
   //Le concatenamos la raiz /src para tener la ruta completa (Lo hacemos porque el fichero no esta
   //en la raiz)
   filePath = `./src/${filePath}`

   //Comprobamos la extension del fichero
   const extname = path.extname(filePath)

   let contentType
   //Dependiendo de la extensión haremos un tratamiento a la salida u otro (modificando el contentType)
   switch (extname){
       case '.css':
           contentType = 'text/css'
           break;
        case '.html':
            contentType = 'text/html'
            break;
   }
   //Escribimos la cabecera del write teniendo en cuenta la variable contentType obtenida en el switch anterior
   response.writeHead(200, { 'Content-Type': `${contentType}; charset=UTF-8`})

   //Leemos el fichero almacenado en filePath
   fs.readFile(filePath, (err, content) => {
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