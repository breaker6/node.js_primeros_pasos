'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jwtSimple = require('jwt-simple');

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Creamos el router
//Importamos express
const router = _express2.default.Router();

//Creamos la ruta

//Importamos la libreria del token
router.post('/', (req, res, next) => {
  //Guardamos como payload un objeto llamado email que obtendremos de params
  const payload = {
    email: req.params.email

    //Devolveremos en una response el token que vamos a generar con el payload y con la clave
    //secreta que hemos creado
  };return res.status(200).send({ token: _jwtSimple2.default.encode(payload, req.app.locals.config.TOKEN) });
});

//Exportamos el router
exports.default = router;