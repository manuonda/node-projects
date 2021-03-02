
const products = [
 { id : 1 , title: 'tomate', price :23.43},
 { id : 2 , title: 'atun'  , price : 100}
]
const Products = require("../model/products")

const all = async (req, res ) => {
  try {
     const data = await Products.find();
     return res.json(data).sendStatus(200);
  } catch (error) {
     console.log(error);
     return res.json({error: error}).sendStatus(500)     
  }
}

const single = (req, res ) => {
   const { id  } = req.params;
   res.send(id).status(402);
}

const create = (req, res) => {
  const {title, price,  } = req.body;
  res.status(201).json("created product ")
}

module.exports =  { all, single , create };