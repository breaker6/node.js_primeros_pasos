//Importamos express
import express from 'express'

//Guardamos la instancia
let _server

//Generamos el objeto server con los metodos start y close
const server = {
  start () {
    //Creamos el servidor en express
    const app = express()

    //Guardamos la instancia y le decimos que escuche el puerto 9000
    _server = app.listen('9000', () => {
      //Si el entorno en el que estamos ejecutando es distinto de test
      if (process.env.NODE_ENV !== 'test') {
        //Que nos avise cuando este arrancando
        console.log('Server opened listen on http://localhost:9000')
      }
    })
  },
  //En close cerramos la instancia del servidor
  close () {
    _server.close()
  }
}

//Exportamos el objeto server
export default server

//Si se utiliza como modulo principal, que ejecute server.start()
if (!module.parent) {
  server.start()
}