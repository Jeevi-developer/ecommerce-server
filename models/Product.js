import mongoose from "mongoose";

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
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
