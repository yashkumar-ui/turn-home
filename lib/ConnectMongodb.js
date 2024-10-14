import mongoose from "mongoose";

export async function connectMongoDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected Sucessfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}
