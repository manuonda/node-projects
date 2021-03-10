const { Schema, model} = require("mongoose")

const ProductSchema = Schema({
  title:{
      type: String, 
      required: true
  },
  price : {
      type: Number,
      required: true
  },
  ts_create : {
      type: Date,
      default: Date.now
  },
  users: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
  },
  photos: {
      type: Schema.Types.Array,
      default: []
  }
});

const Products  = model( "Products", ProductSchema)
module.exports = Products;