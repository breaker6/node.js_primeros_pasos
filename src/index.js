//console.log('Hola Mundo')

//importamos las librerias para leer texto
import fs from 'fs'
//import * as fs from 'fs'
import readline from 'readline'

//Cogemos el segundo argumento recibido en la ejecución, que será el número del fichero
const file = process.argv[2]
let lines = 0
//console.log(file)

//Creamos la constante para leer
const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity
})

//Vamos contando las lineas y mostrando el número de carácteres en cada linea
rl.on('line', line =>{
    ++lines
    console.log(`Numero total de caracteres por linea: ${line.length}`)
})

//Mostramos la suma de todas las lineas
rl.on('close', () => console.log(`Numero total de lineas: ${lines}`))

