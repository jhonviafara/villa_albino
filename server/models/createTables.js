import sqlite3 from 'sqlite3';
import connection from '../config/data.db';

// Abrir la conexión a la base de datos SQLite
const tablas =  () => {
  const db = connection

  // Crear tabla de jugadores
  db.exec(`
    CREATE TABLE IF NOT EXISTS players (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      age INTEGER NOT NULL,
      status TEXT NOT NULL
    );
  `);

  // Crear tabla de entrenadores
 db.exec(`
    CREATE TABLE IF NOT EXISTS coaches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL
    );
  `);

  // Crear tabla de patrocinadores
   db.exec(`
    CREATE TABLE IF NOT EXISTS sponsors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      contribution_amount REAL NOT NULL
    );
  `);

  // Crear tabla de gastos
   db.exec(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT NOT NULL,
      amount REAL NOT NULL,
      date TEXT NOT NULL
    );
  `);

  // Crear tabla de implementos del club
   db.exec(`
    CREATE TABLE IF NOT EXISTS equipment (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      condition TEXT NOT NULL
    );
  `);

  console.log("Todas las tablas han sido creadas correctamente.");
  
  return db;
};


