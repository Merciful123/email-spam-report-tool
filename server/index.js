import mongoose from "mongoose";
import express from "express";
import env from "dotenv";



env.config();

const app = express();

const DB_URL = process.env.MONGODB_URL;



app.get("/", (req, res) => {
  res.json("connected");
});



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Stop the app if DB fails
  }
};

connectDB();
