const express = require("express");
const { Logger } = require("logger");

const  port = process.env.PORT || 3000
const app = express()

const products =  require("./routes/products")
const auth     =  require("./routes/auth")



//app.use(Logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))


app.use("/products", products);
app.use("/auth" , auth)

app.listen(3000, () => {
   console.log(`Listen in port ${port}`)
});



app.use(function(err, req, res, next){
   console.error(err)
   res.sendStatus(500);
})
