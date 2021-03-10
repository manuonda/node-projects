const { schema } = require("../schemas/generic")

const validateId = (req, res , next ) => {
    const { error, value } = schema.validateId.validate(req.params);
    console.log(error, value);
    
}