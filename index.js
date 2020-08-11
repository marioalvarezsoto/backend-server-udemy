// Requires
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { dbConection } = require('./database/config');


// Servidor Express
const app = express();

// Configurar CORS
app.use(cors());

// Base DAtos
dbConection();


// IAyOVbvugZzJTvuo
// mean_user

// // Body parser
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// Importar Rutas
// var appRoutes = require('./routes/app');
// var usuarioRoutes = require('./routes/usuario');
// var loginRoutes = require('./routes/login');
// var hospitalRoutes = require('./routes/hospital');
// var medicoRoutes = require('./routes/medico');

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });

});


// Conexion a la base de datos
// mongoose.connect('mongodb+srv://mean_user:9cinZHiSXHmxAEdG@cluster0.djl1q.mongodb.net/hospitalDB', (err, res) => {
//     if (err) throw err;

//     console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

// });


// Rutas
// app.use('/medico', medicoRoutes);
// app.use('/hospital', hospitalRoutes);
// app.use('/usuario', usuarioRoutes);
// app.use('/login', loginRoutes);
// app.use('/', appRoutes);



// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Express server puerto: ', process.env.PORT);
    // console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});