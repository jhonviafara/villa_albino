@echo off
title Iniciar Sistema de Villa Albino
echo Iniciando el sistema...

REM Inicia el frontend (client) en segundo plano
start /min cmd.exe /c "cd client && npm run dev"

REM Inicia el backend (server) en segundo plano
start /min cmd.exe /c "cd server && npm start"

echo El sistema se ha iniciado correctamente. Puedes accederlo en http://localhost:3000.
