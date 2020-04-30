'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _music = require('./routes/music');

var _music2 = _interopRequireDefault(_music);

var _auth = require('./routes/auth');

var _auth2 = _interopRequireDefault(_auth);

var _me = require('./routes/me');

var _me2 = _interopRequireDefault(_me);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.use('/auth', _auth2.default);
  app.use('/me', _me2.default);
  app.use('/music', _music2.default);
};