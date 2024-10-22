import express from 'express';
import connection from '../config/db.js'; 

const routerLogin = express.Router();
 
//loguear usuario existente
routerLogin.post('/login', (req, res) => {
   
    
    const { nombre, password } = req.body;
    console.log("nombre recivido :"+ nombre)
    console.log("contraseña recivida :"+ password)
    // Consulta a la base de datos
    const query = 'SELECT * FROM usuarios WHERE nombre = ? ';
        
    connection.query(query, [nombre], async (err, results) => {
        if (err) { 
              return res.status(500).json({ error: 'Error en la base de datos' });              
        }

         if (results.length > 0) {
            const user = results[0]; 
                          
             if (user.password === password) {
                 res.status(200).json({ success: true, message: 'Login exitoso' });
                } else {
                res.status(401).json({ success: false, message: 'Credenciales incorrectas 1' });
            }
        } else {            
            res.status(401).json({ success: false, message: 'Credenciales incorrectas 2' });
        }
    });
});




// Ruta para registrar un nuevo usuario
routerLogin.post('/register', async (req, res) => {
    const { nombre, password } = req.body;

    try {

        // Insertar el nuevo usuario en la base de datos
        const query = 'INSERT INTO usuarios (nombre, password) VALUES (?, ?)';
        connection.query(query, [nombre,], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error en la base de datos' });
            }
            res.status(201).json({ success: true, message: 'Usuario registrado con éxito' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
});

export default routerLogin;