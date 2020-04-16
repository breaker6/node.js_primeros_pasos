//Creamos el cliente

//Importamos la libreria necesaria
import net from 'net'

//Generamos el socket
const socket = net.Socket()
//Lo conectamos al puerto 8000 de localhost
socket.connect(8000, 'localhost')

//Enviamos el mensaje
socket.write('Hola?')

//Mostramos por consola cuando recibimos el dato
socket.on('data', data => console.log(data.toString()))