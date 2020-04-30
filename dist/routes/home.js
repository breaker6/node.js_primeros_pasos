'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Le decimos a express que dentro de la variable router introduciremos rutas
const router = _express2.default.Router();

router.get('/', (req, res, next) => {
  res.render('home', {
    title: 'NodeJS',
    message: 'Primeros pasos en NodeJS'
  });
});

exports.default = router;