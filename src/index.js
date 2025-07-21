// require('dotenv').config({path:'./env'}) (this is first way and the second way is down line no :5)
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB();

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express()

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error",(error)=>{
//         console.log("error",error);
//         throw error
//     })
//     app.listen(process.env.PORT,()=>{
//         console.log(`App os listening on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.log("error :", error);
//     throw err;
//   }
// })();
