const { Schema, model} = require('mongoose')

const schema = Schema({
    
   total: {
        type: Number,
        required:true
   },
   products: {
       type: Array,
       required: true
   },
   tsCreate: {
     type: Date,
     default: Date.now
   },
   enable: {
       type: Boolean,
       default: true
   },
   users: {
       type: Schema.Types.ObjectId,
       ref : "User",
       required: true
   }
})

module.exports = model("purchase", schema);