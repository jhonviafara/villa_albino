# villa_albino
estamos trabajando con node para trabajar el backend implementando el framework express para realizar las peticiones http (CRUD create,read,updatey dellete) 
pasos:
number one
Diseño de la Base de Datos: en proceso...
CREATE DATABASE villa_albino;
USE villa_albino;

CREATE TABLE clubes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100),
    estadio VARCHAR(100)
);

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE jugadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    posicion VARCHAR(50),
    categoria_id INT,
    club_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id),
    FOREIGN KEY (club_id) REFERENCES clubes(id)
);

CREATE TABLE posiciones_liga (
    id INT AUTO_INCREMENT PRIMARY KEY,
    club_id INT,
    puntos INT DEFAULT 0,
    partidos_jugados INT DEFAULT 0,
    victorias INT DEFAULT 0,
    empates INT DEFAULT 0,
    derrotas INT DEFAULT 0,
    goles_a_favor INT DEFAULT 0,
    goles_en_contra INT DEFAULT 0,
    diferencia_goles INT AS (goles_a_favor - goles_en_contra),
    FOREIGN KEY (club_id) REFERENCES clubes(id)
);

CREATE TABLE partidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    club_local_id INT,
    club_visitante_id INT,
    fecha DATE NOT NULL,
    goles_local INT,
    goles_visitante INT,
    categoria_id INT,
    FOREIGN KEY (club_local_id) REFERENCES clubes(id),
    FOREIGN KEY (club_visitante_id) REFERENCES clubes(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE posibles_jugadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    posicion VARCHAR(50),
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE patrocinadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    industria VARCHAR(100),
    informacion_contacto VARCHAR(255)
);



nomber two
Definición de Endpoints y Rutas
number tree
Creación de Modelos y Controladores
number four
Configuración de la Conexión a la Base de Datos
number sixx
Implementación de las Rutas y Controladores
