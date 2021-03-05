const {Schema, model } = require('mongoose')

const User = Schema({
  email:{
     type: String,
     required: true,
     unique: true,
  },
  password : {
      type: String,
      required: true
  },
  name: {
      type: String,
      required: true
  } ,
  lastname:{
      type: String, 
      required: false
  },
  shippingAddress: {
      type: Array,
      default: []
  },
  tsCreate: {
      type: Date,
      default: Date.new
  },
  enable: {
      type: Boolean,
      default: false

  }

});

const UserModel =  model("users", User);
module.exports = UserModel;