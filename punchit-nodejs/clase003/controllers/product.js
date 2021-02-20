const Products =  require("../model/Product")


const list = async (req, res) => {
 
    try {
        const data = await Products.find();
        console.log(data);
        res.json(data).status(200);
    } catch (error) {
        res.sendStatus(500);
    }
}


const add = (req, res ) => {


}

const remove = (req, res) => {

}

module.exports = { list , add , remove}; 