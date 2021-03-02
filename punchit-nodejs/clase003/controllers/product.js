const { response } = require("express");
const Products =  require("../model/Product")


const list = async (req, res) => {
 
    try {
        const data = await find();
        console.log(data);
        res.json(data).status(200);
    } catch (error) {
        res.sendStatus(500);
    }
}


const add = async (req, res ) => {

    console.log(req.body);
   const {price, title }  = req.body;
   console.log(price, title);
   try {
       const product =  new Products({
          title: title,
          price: price  
       });
       const result = await product.save({ title, price });
       res.json(result); 
    } catch (error) {
       console.log(error);
       res.sendStatus(500);
   }
}

const single = async (req, res) => {
    try {
        const result = await find(req.parms.id);
        return res.json(result);
    } catch (error) {
        res.status(500)
    }
}


const find = async ( _id = null) => {
        try {
            if ( id) return await Products.findById(_id);
            return await Products.find()
        } catch (error) {
            res.send
        }
}

const remove = (req, res) => {

}

module.exports = { list , single , add }; 