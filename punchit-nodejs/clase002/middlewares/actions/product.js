const schema =  require("../schemas/product")

const validateCreate =  (req, res , next ) => {
    console.log(`Req body ${req.body}`);
    const { error, value } = schema.crear.validate(req.body);
    console.log(error, value);
    error ? res.status(420).json({ message : error.details[0].message }): next();
}

module.exports = { validateCreate }