//Importamos express
import express from 'express'

import config from './config'

//Guardamos la instancia
let _server

//Generamos el objeto server con los metodos start y close
const server = {
  start () {
    const app = express()
    //Recibimos el archivo de configuracion
    config(app)

    _server = app.listen('9000', () => {
      if (process.env.NODE_ENV !== 'test') {
        console.log('Server opened listen on http://localhost:9000')
      }
    })
  },
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