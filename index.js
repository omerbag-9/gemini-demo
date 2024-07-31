// import modules
import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import router from "./src/routes/index.js";
import { globalErrorHandler } from "./src/utils/asyncHandler.js";

// config the .env file
dotenv.config();

// create server

const app = express();
const port = 3000 || process.env.PORT;

// parse data

app.use(express.json());

//Configure routes
app.use(router);

//Handle errors
app.use(globalErrorHandler);

const start = async () => {
  try {
    // connect db
    await connectDB();
    console.log("Successfully connected to mongo");
    app.listen(port, () => {
      console.log("app is running on port", port);
    });
  } catch (error) {
    console.log("Couldn't connect to db");
  }
};

start();
