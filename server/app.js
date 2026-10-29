require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./src/config/database');
const itemsRouter = require('./src/routes/items');
const usersRouter = require('./src/routes/users');
const createAdminAccount = require("./src/scripts/admin");

//AUTENTICACION CON JWT Y BCRYPT
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT;

//1. Iniciamos la conexion a la BD de MongoDB
conectarDB();

//2. Middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//creo una cuenta con rol 'admin' si es que no existe
createAdminAccount();

//4. Logger Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method}] -> ${req.url}`);
    next();
});

//5. Rutas API REST
app.use('/api/items', itemsRouter);
app.use('/api/users', usersRouter);

//6. Capturador de rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({
        status: 'Error',
        mensaje: `La ruta ${req.originalUrl} con el método ${req.method} no existe en este servidor.`
    });
});

//7. Manejador de errores internos (500)
app.use((err, req, res, next) => {
    console.error('ERROR INTERNO:', err.stack);
    res.status(500).json({ status: 'Error', mensaje: 'Algo salió mal en el servidor'});
});

//8. Arrancar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});


