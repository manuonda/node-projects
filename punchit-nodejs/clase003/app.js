require('dotenv').config()
const express = require("express")
const app  = express()
const {dbConnection} =  require('./database/config')

dbConnection();

const port = process.env.PORT || 4000

app.use(express())
app.use(express.urlencoded({extended: true}))

const productRouter = require("./routes/product")

app.use("/products", productRouter);

try {
      
   const server = app.listen(port, () => {
       console.log(`listen port  ${port}`);
   });
} catch (error) {
   console.error(error);    
}