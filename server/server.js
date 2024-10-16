import dotenv, { config } from 'dotenv';
import router from './routes/auth.js'; // Ruta de autenticación de usuario
import express from 'express';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT;
dotenv.config(); // Carga variables de entorno desde .env

app.use(cors())
app.use(express.json())
// Rutas de logueo
app.use('/', router);
// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});