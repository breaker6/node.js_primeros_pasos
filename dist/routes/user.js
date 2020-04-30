'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/:user', (req, res, next) => {
  res.render('user', {
    title: 'NodeJS',
    message: `Bienvenido usuario ${req.params.user}`
  });
});

exports.default = router;