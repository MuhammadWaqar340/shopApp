const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: { type: String, max: 100 },
  price: { type: Number },
});

module.exports = mongoose.model("Product", ProductSchema);
