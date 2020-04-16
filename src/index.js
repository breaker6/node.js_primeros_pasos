// Muestra el número total de lineas, y el número de palabras por linea

//Importamos la libreria readline
import readline from 'readline'
//Le decimos que vamos a utilizar los scripts async.js y events.js
import async from './async'
import events from './events'

//Guardamos el parámetro que corresponde al archivo que queremos leer
const file = process.argv[2]

//Creamos el objeto rl con los parámetros input y output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//Usando el objeto creado, hacemos la pregunta
rl.question(
  `Como quiere leer el fichero?
  1. De forma asíncrona (default)
  2. Con eventos
  Seleccione una opcion: `,
  value => {
    console.log(`Selecciono ${value}\n\n`)

    //En funcion del valor escogido, llamaremos a un script u otro pasandole el archivo a leer
    switch (value) {
      case '2':
        events(file)
        break
      default:
        async(file)
    }
    rl.close()
  })