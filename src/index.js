//Importamos express
import express from 'express'

import config from './config'

import router from './router'

//Guardamos la instancia
let _server

//Generamos el objeto server con los metodos start y close
const server = {
  start () {
    const app = express()

    config(app)

    // Rutas
    /*
    app.get('/', (req, res, next) => {
      res
         //Devolvermos el status 200 (todo ha ido bien y un objeto json)
        .status(200)
        .json({ data: 'metodo get' })
    })

    app.post('/', (req, res, next) => {
      res
         //Devolvermos el status 200 (todo ha ido bien y un objeto json)
        .status(200)
        .json({ data: 'metodo post' })
    })

    app.put('/', (req, res, next) => {
      res
         //Devolvermos el status 200 (todo ha ido bien y un objeto json)
        .status(200)
        .json({ data: 'metodo put' })
    })

    app.delete('/', (req, res, next) => {
      res
         //Devolvermos el status 200 (todo ha ido bien y un objeto json)
        .status(200)
        .json({ data: 'metodo delete' })
    })*/
    config(app)
    router(app)

    _server = app.listen(app.locals.config.PORT, () => {
      const address = _server.address()
      const host = address.address === '::'
        ? 'localhost'
        : address

      const port = app.locals.config.PORT
      if (process.env.NODE_ENV !== 'test') {
        console.log(`Server opened listen on http://${host}:${port}`)
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