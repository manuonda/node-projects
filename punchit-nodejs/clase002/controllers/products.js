
const products = [
 { id : 1 , title: 'tomate', price :23.43},
 { id : 2 , title: 'atun'  , price : 100}
]

const all = (req, res ) => {
   res.json({
       products
   })
}

const single = (req, res ) => {
   const { id } = req.params;
   res.send(id).status(402);
}

const create = (req, res) => {
  const {title, price, id } = req.body;
  res.status(201).json("created product ")
}

module.exports =  { all, single , create };