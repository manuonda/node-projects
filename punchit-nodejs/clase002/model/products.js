const { Schema, model } = require("mongoose")

const ProductSchema =  Schema ({
   title: {
       type: String, 
       required: true
   },
   price: {
       type: Number,
       required: true
   },
   condition: {
       type: String,
       default: "new"
   },
   ts_create : {
       type: Date,
       default: Date.now
   }
});


productSchema = model("products" , ProductSchema);
module.exports = productSchema;