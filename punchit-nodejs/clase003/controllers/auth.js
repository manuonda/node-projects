const User = require('../model/User')
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
     console.log(email, password);
     const user = await User.findOne({ email });
     console.log(user);
     if ( user) {
         const isPasswordValidate = unhash(password, user.password);
         console.log(isPasswordValidate)
         if (!isPasswordValidate) return res.status(401).json({message: 'Usuario o Password incorrectos'});
         res.status(200).json({ message : 'Usuario validado'})
     } else {
         res.status(401).json({message: 'Datos no ingresados'});
     }
     
    } catch(error ) {
       console.log(error);
       res.status(500);
    }
}

module.exports = {create , authenticate }