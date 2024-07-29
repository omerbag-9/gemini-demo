import mongoose from "mongoose"

export const connectDB = async()=>{
    console.log("Connecting")
    await mongoose.connect('mongodb://localhost:27017/gemini')
}