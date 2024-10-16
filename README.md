# villa_albino

estamos trabajando con node para trabajar el backend implementando el framework express para realizar las peticiones http (CRUD create,read,update y delete) 
(frontend a cargo de ramiro)
En el frontend utilizamos la biblioteca de javascript react con vite

pasos backend
paso numero 1:
Diseño de la Base de Datos: en proceso...
 
numero dos:
Definición de Endpoints y Rutas
en proceso...

number tree
Creación de Modelos y Controladores
en proceso...

number four
Configuración de la Conexión a la Base de Datos

number sixx
Implementación de las Rutas y Controladores



Para lograr esto, vamos a modificar tanto el frontend como el backend. Primero, agregaremos una opción para registrar un nuevo usuario desde el archivo `login.pages.jsx`. Luego, actualizaremos el backend para manejar el registro de nuevos usuarios y el inicio de sesión con contraseñas hasheadas usando bcrypt.

### Paso 1: Modificar el Frontend

Vamos a añadir un formulario de registro en la página de inicio de sesión para que los usuarios puedan registrarse.

```jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo-Club.png";
import StyledButton from "../components/StyledButton"
import StyledInput from "../components/StyledInput"

function Login() {
   const [nombre, setNombre] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const [isRegistering, setIsRegistering] = useState(false); // Nuevo estado para alternar entre login y registro

   const navigate = useNavigate();  
    
   const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/login", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, password }),
            });
            const data = await response.json();

            if (data.success) {
                navigate('/home');            
            } else {
                setError('Nombre o contraseña incorrectos');
            }
        } catch (err) {
            console.error("error en el inicio de sesion", err);
            setError('Hubo un problema con el inicio de sesión');
        }
    };

   const handleRegister = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/register", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, password }),
            });
            const data = await response.json();

            if (data.success) {
                navigate('/home');
            } else {
                setError('Hubo un problema al registrar el usuario');
            }
        } catch (err) {
            console.error("Error en el registro", err);
            setError('Hubo un problema con el registro');
        }
    };

   return (
       <div className="hero bg-green-700 min-h-screen">
           <div className="hero-content text-center flex flex-col">
               <img src={Logo} alt="Logo" className="w-44 block drop-shadow-xl" />
               <form className="max-w-md" onSubmit={isRegistering ? handleRegister : handleLogin}>
                   <StyledInput 
                       placeholder={"Ingrese su nombre"} 
                       textColor={"text-gray"}
                       value={nombre}
                       type="text"
                       onChange={(e) => setNombre(e.target.value)}
                   />
                   <StyledInput 
                       placeholder={"Ingrese su contraseña"} 
                       type="password" 
                       textColor={"text-gray"}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                   />
                   {error && <p className="text-red-500">{error}</p>}
                   <StyledButton accept innerText={isRegistering ? "Registrarse" : "Ingresar"} btnType={"submit"} />
                   <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
                       {isRegistering ? "¿Ya tienes una cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
                   </button>
               </form>
           </div>
       </div>
   );
}

export default Login;
```

### Paso 2: Modificar el Backend

Añadimos una nueva ruta en el backend para manejar el registro de usuarios y modificar la ruta de login para comparar las contraseñas hasheadas.

```javascript
// auth.js

import express from 'express';
import bcrypt from 'bcrypt';
import connection from '../config/db.js'; 

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
    const { nombre, password } = req.body;

    try {
        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Inserta el nuevo usuario en la base de datos
        const query = 'INSERT INTO usuarios (nombre, password) VALUES (?, ?)';
        connection.query(query, [nombre, hashedPassword], (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error en la base de datos' });
            }
            res.json({ success: true, message: 'Usuario registrado con éxito' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
});

// Ruta para iniciar sesión
router.post('/login', (req, res) => {
    const { nombre, password } = req.body;

    // Consulta en la base de datos
    const query = 'SELECT * FROM usuarios WHERE nombre = ?';
    connection.query(query, [nombre], async (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
        if (results.length > 0) {
            // Compara la contraseña hasheada
            const isMatch = await bcrypt.compare(password, results[0].password);
            if (isMatch) {
                return res.json({ success: true, user: results[0] });
            } else {
                return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
            }
        } else {
            return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    });
});

export default router;
```

### Paso 3: Verificar que el servidor está configurado correctamente

Asegúrate de que el `server.js` tenga las rutas necesarias configuradas:

```javascript
// server.js

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import router from './routes/auth.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/auth', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### Paso 4: Probar el sistema

- Intenta registrar un nuevo usuario desde la página de login.
- Luego, trata de iniciar sesión con ese usuario.

Este flujo debería permitirte crear usuarios y autenticarte correctamente con contraseñas hasheadas.