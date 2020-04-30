'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Cargamos la configuracion en la constante settings. Esto guarda toda la informacion del
//fichero de configuracion

//Importamos cors
//Importamos body-parser
const SETTINGS = (0, _dotenv.config)();

//Exportamos (la vamos a utilizar fuera) una funcion que por defecto recibirá la instancia del
//servidor creado

//Importamos solo la funcion config de la dependencia dotenv

//Importamos el logger morgan

exports.default = app => {
  //Desabilitamos el x-powered
  app.disable('x-powered-by');

  //Seteamos el entorno de desarrollo. Le decimos que nuestro entorno se define por
  //process.env.NODE_ENV
  //app.set('env', process.env.NODE_ENV)
  //El entorno de desarrollo vendrá definido en la configuracion que esta almacenada en SETTINGS
  app.set('env', SETTINGS.parsed.ENV);

  //Seteamos la variable config y le decimos que guarde todos los datos de settings
  app.set('config', SETTINGS.parsed);
  //Le decimos que de forma local el entorno es env (variable seteada arriba)
  app.locals.env = app.get('env');
  //Seteamos el config en el config local
  app.locals.config = app.get('config');

  //Desactivamos el logger en caso de los test
  if (process.env.NODE_ENV !== 'test') {
    //Usamos el formato de log combined que es el mas completo
    app.use((0, _morgan2.default)('combined'));
  }

  //Parsearenis todos los logs que nos lleguen a un formato visible
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: false }));

  //Usamos cors. Cors permite configurar de forma automatica las cabeceras de la aplicacion
  app.use((0, _cors2.default)());
};