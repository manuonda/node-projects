const { token } = require('morgan');
const { decodeToken } = require('../services/auth')

const decodeHeaders = (req) =>{
    const {authorization} = req.headers;
    const {_id , role }   =  authorization;
    return { _id, role};
}

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



const securedAdmin = (req, res, next) => {
    try {
        const {_id , role }  = decodeHeaders(req); 
       if (role !=="admin" ) throw new Error("No tenes acceso a esta ruta");
       req.id = _id;
       req.role = role;
       next();
    } catch (error) {
       res.status(401).json({ message: 'Unautorized'}) 
    }

}

module.exports =  { securedUser , securedAdmin}