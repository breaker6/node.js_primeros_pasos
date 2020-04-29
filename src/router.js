import music from './routes/music'
import user from './routes/me'

//Exportamos una funcion que rebirá app
export default app => {
  //Dependiendo para que ruta usaremos cosas distintas
  app.use('/me', user)
  app.use('/music', music)
}