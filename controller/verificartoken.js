const config = require('../config');
const jwt = require('jsonwebtoken');

function verificartoken (req, res, next ){

    const token = req.headers['x-access-token'];
    if (!token){

        return res.status(401).json({
             auth: false,
             message: 'no me has dado un token'
        })
    }

   const decod = jwt.verify(token, config.secret);
   req.usuarios = decod.id;
   next();
   
}

module.exports = verificartoken;