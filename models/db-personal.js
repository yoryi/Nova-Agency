const mongoose = require('mongoose');
const {Schema} = mongoose;

//libreria para fechas
const moment = require('moment');

//configuramos el idioma local
moment.locale('es');

//Creamos Modelo DB-Personal
const personalSchema = new Schema ({

    user: {type: String, require: true},
    identificacion: {type: Number, require: true},
    nombre: {type: String, require: true},
    apellido: {type: String, require: true},
    ciudad: {type: String, require: true},

    creacion: {
        type: String, 
        default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    }
})

//Exportamos Modelo
module.exports = mongoose.model('personal', personalSchema);
