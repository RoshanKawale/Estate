import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connecting to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
