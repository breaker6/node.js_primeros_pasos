'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _socket = require('./socket');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Guardamos la instancia
//Importamos express
let _server;

//Generamos el objeto server con los metodos start y close
const server = {
  start() {
    const app = (0, _express2.default)();

    (0, _config2.default)(app);

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
    (0, _config2.default)(app);
    (0, _router2.default)(app);

    _server = app.listen(app.locals.config.PORT, () => {
      //Conectamos con el socket
      (0, _socket.connect)();
      const address = _server.address();
      const host = address.address === '::' ? 'localhost' : address;

      const port = app.locals.config.PORT;
      if (process.env.NODE_ENV !== 'test') {
        console.log(`Server opened listen on http://${host}:${port}`);
      }
    });
  },
  close() {
    _server.close();
  }
};

//Exportamos el objeto server
exports.default = server;

//Si se utiliza como modulo principal, que ejecute server.start()

if (!module.parent) {
  server.start();
}