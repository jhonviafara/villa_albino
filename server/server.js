import dotenv from 'dotenv';
dotenv.config();//variables de entorno cargadas desde el archivo .env

import connection from './config/db.js';
import express from 'express'

const app = express();
const PORT = process.env.PORT ;

app.get('/', (req, res) => {
    connection.query('SELECT * FROM clubes', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
