import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import listingRouter from "./routes/listing.js";
import { errormiddleware } from "./utils/error.js";
import cookieParser from "cookie-parser";
import path from "path";

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

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/listing", listingRouter);

app.use(errormiddleware);
