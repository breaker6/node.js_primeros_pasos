//Creamos el servidor

//Importamos la libreria net que será la necesaria
import net from 'net'

//Creamos el servidor que recibirá una funcion que a su vez recibirá un parametro
const server = net.createServer(socket => {
  //Activamos el evento cuando recibimos un dato
  socket.on('data', data => {
    //Imprimimos el dato recibido en forma de string
    console.log(data.toString())
    //El servidor manda una cadena
    socket.write('Mundo?')
  })
})

//Verificamos si se ha producido un error
server.on('error', err => {
  throw err
})

//Si la conexión funciona, lo avisaremos por pantalla
server.on('connect', () => console.log('socket connected'))

//Arrancamos el servidor con los siguientes parametros y lo dejamos listo para recibir informacion
server.listen(
  {
    host: 'localhost',
    port: 8000,
    exclusive: true
  },
  () => console.log('Servidor socket abierto en ', server.address())
)