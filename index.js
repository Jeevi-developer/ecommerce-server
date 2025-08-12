const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Add this for MongoDB
const productRoutes = require("./routes/productRoutes"); // Import your product routes

const app = express();
const PORT = 3001;

// ✅ Connect to MongoDB (replace with your connection string)
mongoose
  .connect("mongodb://localhost:27017/miruthangini", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Middleware
app.use(cors());
app.use(express.json()); // for POST requests

// ✅ Mount productRoutes
app.use("/api/products", productRoutes);

// ✅ Static assets if needed
app.use("/images", express.static("public/images"));

app.get("/", (req, res) => {
  res.send("✅ API is running successfully! Visit /api/... for endpoints.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
