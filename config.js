import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // wait max 10s
    });
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export const API_BASE_URL = "https://ecommerce-server-1vgv.onrender.com";
export const FRONTEND_URL = "http://ecommerce-client-mauve.vercel.app/";

export default connectDB;
