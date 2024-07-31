import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Connecting");
  await mongoose.connect(process.env.MONGO_SECRET);
};

export default connectDB;
