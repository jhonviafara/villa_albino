import express from 'express';
import connection from '../config/db.js'; 

const getPlayer = express.Router();


getPlayer.get('/jugadores', async (req, res) => {
    
    try {
      const jugadores = await connection.query('SELECT * FROM jugadores');
      res.json(jugadores);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener jugadores', error });
    }
  });
  

export default getPlayer