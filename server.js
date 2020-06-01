//IMPORTACIONES DE MODULOS
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');

//VARIABLES DE ENTORNO
require('dotenv').config()

//IMPORTACION DE RUTAS
const PERSONAL = require('./routes/personal');
const AUTH = require('./controller/auth');


//VARIABLES
const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080;


//CONFIGURACION DE BASE DE DATOS MONGO DB
mongoose.connect(process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(console.log('db conectado'))
    .catch(err => console.log(err));


//CONFIGURACION SERVER O MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//RUTAS O REST API
app.use('/', AUTH);
app.use('/Personal', PERSONAL);


//ENTORNO DE PRODUCCION
if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

//PUERTO DEL SERVIDOR
app.listen(PORT, () => {
    log('Servidor en el puerto: ' + PORT);
});