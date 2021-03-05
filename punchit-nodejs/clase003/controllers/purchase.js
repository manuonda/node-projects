const Product = require("../model/Product");

const all = async (req, res) => {
  try {
    const data = await Product.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    const purchase = new Product(req.body);
    purchase.users = req.id; //global reference for user id
    const data = await purchase.save();
    console.log("data create purchase", data);
    return res.status(201).json({ messag: "Compra Generada", data });
  } catch (error) {
    console.log(error);
    res.status(200).json({ error: error });
  }
};

module.exports = { all, create };
