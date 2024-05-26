//primero voy a importar la funciotion de createConnection desde el paquete mysql que se encuentra en los modulos de node
import { createConnection } from "mysql"
//creamos una constante coneccion la cual llama a la funcion createConneccion y le que a su vez y tiene como parametro un objeto con los datos necesarios para realizar dicha connexion : host,usuario,password y database.  
const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'aun no ',
    database:'aun no'
})
connection.connect((err) =>{
    if (err) {
    console.error('error conectando a la base de datos', err)
} 
    console.log("conexion a la base de datos establecida")
})