require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConection } = require('./database/config');

// Crear el servidor de Express
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parse del body
app.use(express.json());


// Base de datos
dbConection();


// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/upload', require('./routes/uploads'));




// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Express server puerto: ', process.env.PORT);
    // console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});