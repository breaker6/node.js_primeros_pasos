'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Usaremos como router express.Router()
const router = _express2.default.Router();

//Nos definimos la ruta get /
//Importamos express para usar su funcion router
router.get('/', (req, res, next) => {
  //Esta ruta devuelve un codigo de estado 200 y un json con datos
  res.status(200).json({
    name: 'Fernando',
    lastname: 'Beltrán'
  });
});

//Exportamos el router
exports.default = router;