require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const app  = express()
const {dbConnection} =  require('./database/config')

dbConnection();

const port = process.env.PORT || 4000


app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

const productRouter = require("./routes/product")
const authRouter    = require('./routes/auth')

app.use("/products", productRouter);
app.use("/auth", authRouter)

try {
      
   const server = app.listen(port, () => {
       console.log(`listen port  ${port}`);
   });
} catch (error) {
   console.error(error);    
}