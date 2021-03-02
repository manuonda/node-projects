const User = require("../../clase003/model/User");
const User = require('../model/')


const create = async (req, res) => {

    try {
        const { email, password } = req.body;
        // comprobar que el email no esta en uso
        let user = await User.
    } catch (error) {
        res.sendStatus(500);
    }
}


module.exports = {create}