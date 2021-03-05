const { token } = require('morgan');
const { decodeToken } = require('../services/auth')

const securedUser = (req, res, next) => {
    try {
        
        const { authorization } = req.headers;
        const tokenDecode = decodeToken(authorization); 
        console.log(tokenDecode);
        console.log(tokenDecode._id);
        const _id = tokenDecode._id;
        const email = tokenDecode.email;
        req.id =  _id;
        // paso a mostrar el next para la llamada del listado
        next();

    } catch (error) {
        console.error(error);
        res.status(401).json({message: 'Unautorized'}); 
    }
}

module.exports =  { securedUser }