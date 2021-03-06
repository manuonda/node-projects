require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { dbConnection }  = require("./database/config");
const { securedUser }   = require("./middlewares/auth");
const { secureAdmin}    = require("./middlewares/auth") 
dbConnection();

const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const productRouter = require("./routes/product");
const authRouter = require("./routes/auth");
const purchaseRouter = require("./routes/purchase");

const adminProducts = require('./routes/admin/products');



app.use("/products", productRouter);
app.use("/auth", authRouter);
app.use("/purchase", securedUser, purchaseRouter);

app.use("/api/admin/products", secureAdmin, adminProducts);

try {
  const server = app.listen(port, () => {
    console.log(`listen port  ${port}`);
  });
} catch (error) {
  console.error(error);
}
