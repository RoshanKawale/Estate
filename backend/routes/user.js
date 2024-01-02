import express from "express";
import { signin, signup, google, updateUser } from "../controller/user.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/signup", signup).post("/signin", signin).post("/google", google).post("/update/:id" , verifyToken , updateUser);

export default router;
