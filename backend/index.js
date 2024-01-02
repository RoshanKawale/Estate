import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import { errormiddleware } from "./utils/error.js";
import cookieParser from "cookie-parser";

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
app.use(cookieParser());

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.use('/api/user' , userRouter);

app.use(errormiddleware)