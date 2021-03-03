const User = require('../model/User');
const { createToken } = require('../services/auth');
const { hash, unhash } = require('../util/bcrypt')


const create = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(email, password);
        // comprobar que el email no esta en uso
        let user = await User.findOne({ email })
        if ( user) return res.status(400).json({  message: 'El mail esta en uso'});
        user  = new User(req.body);
        user.password = hash(password);
        const result = await user.save();
        res.status(200).json(result); 

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}


const authenticate = async (req, res) => {

    try {
     const { email  , password } =  req.body ;
     const user = await User.findOne({ email });
    
     if ( user) {
        // descifrado del password y el user 
        const isPasswordValidate = unhash(password, user.password);
         
        const JWTObject= {
            _id: user.id,
            email
        };
        // creamos el token
        const JWT = createToken(JWTObject);
        
         if (!isPasswordValidate) return res.status(401).json({message: 'Usuario o Password incorrectos'});
         res.status(200).json({ message : 'Usuario validado' , JWT})
     } else {
         res.status(401).json({message: 'Datos no ingresados'});
     }
     
    } catch(error ) {
       console.log(error);
       res.status(500);
    }
}

module.exports = {create , authenticate }