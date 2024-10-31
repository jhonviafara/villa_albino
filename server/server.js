import dotenv, { config } from 'dotenv';
import express from 'express';
import cors from 'cors'
import routerLogin from './routes/auth.js';
import  jugadoresRouter  from './routes/jugadores.routes.js';


const app = express();
dotenv.config(); 
  // Carga variables de entorno desde .env
  const PORT = process.env.PORT;
   
    app.use(cors())
    app.use(express.json())
// Rutas de logueo
    app.use('/', routerLogin);
   
    app.use(jugadoresRouter);
// Inicia el servidor
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 