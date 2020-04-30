//Importamos la libreria websocket
import WebSocket from 'ws'

//Guardamos una instancia por si acaso
let instance
//Creamos una libreria que usar en la aplicacion
//Creamos la constante connect que generará un socket que usará el puerto 8080
export const connect = () => {
  const socket = new WebSocket.Server({ port: 8080 })

  //Cuando le llegue un evento llamado connection
  socket.on('connection', ws => {
    //Asignaremos el parametro ws recibido a la instancia creada
    instance = ws
    //Enviaremos a quien nos esté escuchando el texto
    ws.send('Connectado al socket')
  })
}

//Creamos la funcion send que recibe un method, una url y un dato
export const send = (method, url, data) => {
    //Comprobamos si existe una instancia
    if (instance) {
      //Si existe, mandaremos una cadena de texto
      instance.send(`${method} ${url} ${JSON.stringify(data)}`)
    }
}