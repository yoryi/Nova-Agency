const express = require('express');
const router = express.Router();

//LIBRERIA DE AUTH
const jwt = require('jsonwebtoken');

//MYSECRET
const config = require('../config');

//MODELO DB 
const Usuarios = require('../models/db-usuarios');


//METODO POST GUARDAR USUARIOS
router.post('/reguistrarse', async (req, res, next) => {

    //creacion de  nuevo usuario
    const { usuario, contraseña, } = req.body;
    const user = new Usuarios({ usuario, contraseña, })

    //encriptar la contraseña y guardar en modelo
    user.contraseña = await user.encriparcontraseña(user.contraseña);
    user.save();

    //Generar Token
    const token = jwt.sign({ id: user._id }, config.secret, {

        expiresIn: 60 * 60 * 24

    })
    res.json({ auth: true, token })
})



//METODO POST INICIAR SESION EN LA APP
router.post('/iniciarsesion', async (req, res, next) => {

    const { usuario, contraseña } = req.body;

    //validacion de usuario
    const user = await Usuarios.findOne({ usuario: usuario });


    if (!user) {
        return res.status(404).send('no existe el usuario')
    }

    //validacion de contraseña
    const contraseña_valida = await user.validarcontraseña(contraseña)

    if (!contraseña_valida) {

        return res.status(401).send({ auth: false, token: null })
    }

    //Generamos un Token
    const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 60 * 60 * 24
    })

    //Verificamos Token
    const verificacion = jwt.verify(token, config.secret);

    //Datos de ese usuario generado
    const Resultado = await Usuarios.findById(verificacion.id, { contraseña: 0, __v: 0 , creacion: 0 })

    //Resultado
    res.json(Resultado);

})


module.exports = router;