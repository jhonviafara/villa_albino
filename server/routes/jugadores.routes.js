import { Router } from "express";
import connection from "../config/db.js";
 
 const jugadoresRouter = Router();
jugadoresRouter.get("/planilla-jugadores", async  (req,res) => {
     connection.all("SELECT JU.*, EST.estado FROM jugadores JU INNER JOIN estado_jugadores EST ON  JU.id_estado = EST.id  " ,(err, rows)=> {
        if (err) {
            return res.status(500).json({ error: 'Error en el servidor' });
            
        } 
        console.log(rows);
        
        return res.status(200).json(rows)

     }  );
});
export default jugadoresRouter;

