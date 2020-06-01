const express = require('express');
const router = express.Router();

//MODELO BD
const Personal = require('../models/db-personal');

//METODO POST PERSONAL
router.get('/', async (req, res, ) => {

    //const {user} = req.body;

    //Obtener data para cada usuario de la app
    //const query = {user: user};
    const Data = await Personal.find();
    return res.json(Data)

})

//METODO POST PERSONAL
router.post('/Nuevo', async (req, res, ) => {

    const {user, identificacion, nombre, apellido, ciudad } = req.body;
    const Newpersonal = new Personal({ user, identificacion, nombre, apellido, ciudad })
    await Newpersonal.save();
    res.json({ status: 'Datos Guardado' });

})

//METODO PUT PERSONAL
router.put('/:id', async (req, res) => {
    
    const {identificacion, nombre, apellido, ciudad } = req.body;
    await Personal.findOneAndUpdate(req.params_id, {identificacion, nombre, apellido, ciudad });
    res.json({ status: 'Datos Actualizado' });

})

//METODO DETELE PERSONAL
router.delete('/:id', async (req, res) => {
    
    await Personal.findByIdAndRemove(req.params.id);
    res.json({ status: 'Usuario Borrado' });

})


//EXPORTAMOS ROUTER
module.exports = router;