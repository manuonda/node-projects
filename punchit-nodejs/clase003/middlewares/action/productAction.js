const Schema = require('../schema/product')

const validateCreate = (req, res , next ) => {
   const {error, value } = Schema.create.validate(req.body);
   error ? res.status(420).json({message : error.details[0].message}): next;
}

module.exports =  { validateCreate }