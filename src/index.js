// Muestra el número total de lineas, y el número de palabras por linea

//Importamos la libreria necesario
import fs from 'fs'
//Cogemos el segundo parámetro escrito en la instrucción en terminal
const file = process.argv[2]

//Leemos el fichero y cuando acabe ejecutamos la función recibiendo los datos escritos entre paréntesis
//file es el fichero leido, err es un posible error y contents es lo que ha leido
fs.readFile(file, (err, contents) => {
  //Si da error, que nos informe por pantalla del problema y paramos la ejecución
  if (err) {
    return console.log(err)
  }

  //Convertimos contents en un string con toString y lo dividimos en parámetros del array lines con split
  //guiandonos por los saltos de linea
  const lines = contents.toString().split('\n')

  //leemos cada una de las lineas
  for (let line of lines) {
    //El length de line indicará el tamaño de la linea en la que estamos en carácteres
    console.log(`Número de caracteres por linea: ${line.length}`)
  }

  //El length de lines nos indicará el número de parámetros en el array
  console.log(`\nNúmero total de lineas: ${lines.length}`)
})

console.log(`Fichero selecionado: ${file}\n`)