export const intentoLog = 'SELECT * FROM usuarios WHERE nombre = ? '
export const consultaJugadores = `SELECT JU.*, EST.estado , CAT.nombre AS categoria_nombre
       FROM jugadores JU 
       INNER JOIN estado_jugadores EST ON  JU.id_estado = EST.id 
       INNER JOIN categorias CAT ON  JU.id_categoria = CAT.id`;