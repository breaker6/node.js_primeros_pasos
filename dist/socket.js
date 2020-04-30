'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = exports.connect = undefined;

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Guardamos una instancia por si acaso
let instance;
//Creamos una libreria que usar en la aplicacion
//Creamos la constante connect que generará un socket que usará el puerto 8080
//Importamos la libreria websocket
const connect = exports.connect = () => {
  const socket = new _ws2.default.Server({ port: 8080 });

  //Cuando le llegue un evento llamado connection
  socket.on('connection', ws => {
    //Asignaremos el parametro ws recibido a la instancia creada
    instance = ws;
    //Enviaremos a quien nos esté escuchando el texto
    ws.send('Connectado al socket');
  });
};

//Creamos la funcion send que recibe un method, una url y un dato
const send = exports.send = (method, url, data) => {
  //Comprobamos si existe una instancia
  if (instance) {
    //Si existe, mandaremos una cadena de texto
    instance.send(`${method} ${url} ${JSON.stringify(data)}`);
  }
};