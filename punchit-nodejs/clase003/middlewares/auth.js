const { decodeToken } = require('../services/auth')

const securedUser = (req, res, next) => {
    try {
        
        const { authorization } = req.headers;
        console.log(req.headers, authorization);
        const tokenDecode = decodeToken(authorization); 
        console.log(tokenDecode);
        // paso a mostrar el next para la llamada del listado
        next();

    } catch (error) {
        console.error(error);
        res.status(401).json({message: 'Unautorized'}); 
    }
}

module.exports =  { securedUser }