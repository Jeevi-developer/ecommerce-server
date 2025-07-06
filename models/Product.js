const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  oldprice: Number,
  newprice: Number,
  image: String,
  discount: String,
  soldout: Boolean,
  sold: {
    type: Number,
    default: 0, // <-- This is important
  },
});

module.exports = mongoose.model("Product", productSchema);
