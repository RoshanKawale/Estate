import express from "express";
import { signin, signup, google, updateUser, deleteUser } from "../controller/user.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/signup", signup).post("/signin", signin).post("/google", google).post("/update/:id" , verifyToken , updateUser).delete('/delete/:id' , verifyToken , deleteUser);

export default router;
