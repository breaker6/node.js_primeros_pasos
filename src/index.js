//importamos la libreria Sequalize
import Sequelize from 'Sequelize'

//Creamos instacia de sequelize diciendo donde debe conectarse
//Recibe la base de datos donde vamos a conectar (peliculas) y un usuario y una contraseña
//(están en blanco porque no tiene)
const sequelize = new Sequelize('peliculas', '', '', {
  //host donde esta la base de datos
  host: 'localhost',
  //El dialecto es el driver necesario
  dialect: 'postgres',
  //Como gestiona las peticiones
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

//Creamos un modelo llamado pelicula y lo llamaremos pelicula
const Pelicula = sequelize.define(
  'Pelicula',
  {
    //Definimos los campos que tendrá. Sequelize traducirá todo al lenguaje de Postgres
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      field: 'id',
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      field: 'title'
    },
    poster: {
      type: Sequelize.STRING,
      field: 'poster'
    }
  },
  {
    //Propiedad. Usa el nombre de la tabla en singular
    freezeTableName: true
  }
)

//Le decimos que se sincronice de forma obligatoria
Pelicula.sync({ force: true })
  //Una vez sincronizado, creamos el elemento con estos cambios
  .then(() => Film.create({
    title: 'Star Wars: The Last Jedi',
    poster: 'https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711'
  })
)