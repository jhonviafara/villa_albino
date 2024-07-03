import dotenv from 'dotenv';
dotenv.config();//variables de entorno cargadas desde el archivo .env

import connection from './config/db.js';
import express from 'express'

const app = express();
const PORT = process.env.PORT ;

app.get('/', (req, res) => {
    connection.query('SELECT * FROM clubes', (err, result1) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result1);
    });   
})
app.get('/', (req,res)=>{
    connection.query('SELECT * FROM jugadores', (err, result2)=>{
        if (err) {
            return res.status(500).send(err)
        }
        res.json(result2); 
});
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
