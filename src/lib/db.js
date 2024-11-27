// src/lib/db.js
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test"; // Your local DB connection string

if (!MONGO_URI) {
  throw new Error("MongoDB URI is required");
}

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGO_URI);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};