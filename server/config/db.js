import { createConnection } from "mysql"
//importar la funciotion de createConnection del paquete mysql 
import dotenv from "dotenv";
// Cargar variables de entorno desde un archivo .env
dotenv.config();

//constante coneccion llama a la funcion createConneccion y recive parametro un objeto con los datos necesarios para realizar dicha connexion : host,usuario,password y database.  
const connection = createConnection({
    host:process.env.DB_HOST || 'localhost',
    user:process.env.DB_USER || '',
    password:process.env.DB_PASSWORD || '',
    database:process.env.DB_NAME || ''
})
    connection.connect((err) =>{
        if (err) {
            console.error('error conectando a la base de datos', err)
            return
        } 
        console.log("conexion a la base de datos establecida")
    })
    
//exportar la conexion para usarla en otros archivos
export default connection;