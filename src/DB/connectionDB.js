import mongoose from "mongoose";

export default async function connectionDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Sara7aApp", {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("DB connected successfully...😍😍");
  } catch (error) {
    console.log(error, "DB connected faild...😢😢");
  }
}
