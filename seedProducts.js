const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

// Import the Product model
const Product = require("./models/Product"); // adjust path if needed

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/myuser")
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // Read the JSON file
    const filePath = path.join(__dirname, "data", "products.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const products = JSON.parse(jsonData);

    // Insert into the database
    return Product.insertMany(products);
  })
  .then(() => {
    console.log("✅ Products inserted successfully!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Error:", err);
    mongoose.disconnect();
  });
