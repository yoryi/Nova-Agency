const mongoose = require('mongoose');
const {Schema} = mongoose;

//libreria para fechas y encritacion de seguridad
const bcrypt = require('bcryptjs');
const moment = require('moment');

//configuramos el idioma local
moment.locale('es');

//Creamos Modelo DB-PERSONAL
const usuariosSchema = new Schema ({

    usuario: {type: String, require: true},
    contraseña: {type: String, require: true},

    creacion: {
        type: String, 
        default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    }

})

//encriptamos contraseña del modelo usuario pasamos por parametro contraseña para encriptar
usuariosSchema.methods.encriparcontraseña = async (contraseña) => {
    const segurity = await bcrypt.genSalt(10);
    return bcrypt.hash(contraseña, segurity);
};


//validamos y comparamos la contraseña
usuariosSchema.methods.validarcontraseña = function (contraseña) {
    return bcrypt.compare(contraseña, this.contraseña);
};


//Exportamos Modelo
module.exports = mongoose.model('usuarios', usuariosSchema);