const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET /api/products/ - list all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// GET /api/products/search?q=Silk
router.get("/search", async (req, res) => {
  const query = req.query.q || "";

  try {
    // Find products where name contains the query (case-insensitive)
    const results = await Product.find({
      name: { $regex: query, $options: "i" },
    });

    res.json(results);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/products/suggestions?q=searchterm
router.get("/suggestions", async (req, res) => {
  const query = req.query.q || "";
  try {
    const results = await Product.find({
      name: { $regex: query, $options: "i" },
    }).limit(5); // limit suggestions for performance

    res.json(results);
  } catch (error) {
    console.error("Suggestion error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
