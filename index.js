import express from "express";
import connectDB from "./config.js";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = 3001;
// ✅ Middleware
app.use(cors());

connectDB().then(async () => {
  const { default: product } = await import("./routes/productRoutes.js");

  // ✅ Mount productRoutes
  app.use("/api/products", product);

  // ✅ Static assets if needed
  app.use("/images", express.static("public/images"));

  app.get("/", (req, res) => {
    if (mongoose.connection.readyState == 1) {
      return res.status(500).json({ successmsg: "API is running" });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
