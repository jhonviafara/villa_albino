import express from 'express';
import connection from '../config/db.js'; 
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // consulta  base de datos
    const query = 'SELECT * FROM usuarios WHERE nombre = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
        if (results.length > 0) {
            // Usuario autenticado con exito
            return res.json({ success: true, user: results[0] });
        } else {
            // Usuario o contraseña incorrectos
            return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    });
});

export default router;