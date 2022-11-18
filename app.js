const express = require("express");
const bodyParser = require("body-parser");
const product = require("./ShopApp/routes/products.routes");
const app = express();
app.use("/products", product);
let port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/shopApp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database Successfull Connected");
    }
  }
);

app.listen(port, function () {
  console.log("Server is up and running on port numner " + port);
});
