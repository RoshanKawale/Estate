import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/user.js";
import { errormiddleware } from "./utils/error.js";

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


app.use(express.json());

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.use('/api/auth' , authRouter);

app.use(errormiddleware)