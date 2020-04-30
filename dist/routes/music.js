'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mocks = require('../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

var _middlewares = require('../middlewares');

var _socket = require('../socket');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Usamos el router de express
//Importamos express
const router = _express2.default.Router();

//Creamos la ruta / que será accesible mediante get y post


//Importamos el archivo mocks que es el que tendrá la información a leer
router.get('/', (req, res, next) => {
  //Cuando el usuario haga una peticion a /music mandaremos el mensaje
  (0, _socket.send)(req.method, req.baseUrl, _mocks2.default);
  //Devolvemos el estado 200 y un json
  res.status(200).json(_mocks2.default);
}).post('/', _middlewares.auth, (req, res, next) => {
  console.log('Body received:', req.body);
  //Devolvemos el estado 201 y un json
  res.status(201).json(req.body);
});

//Creamos una ruta que recibirá el nombre de un cantante
router.get('/:singer', (req, res, next) => {
  console.log('a', req.params.singer);
  //Le decimos que guarde la informacion del cantante almacenada en el archivo mocks
  const songsBySingers = _mocks2.default.filter(item => item.singer.toLowerCase() === req.params.singer.toLowerCase());

  //Cuando el usuario haga una peticion a /:singer mandaremos el mensaje
  (0, _socket.send)(req.method, req.baseUrl, songsBySingers);

  //Le decimos que devuelva la informacion que ha leido en forma de json
  res.status(200).json(songsBySingers);
});

//Exportamos el router
exports.default = router;