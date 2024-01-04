import express from "express";
import { signin, signup, google, updateUser, deleteUser, signOut } from "../controller/user.js";
import { verifyToken } from "../utils/verifyUser.js";
import { getUserListings } from "../controller/listing.js";

const router = express.Router();

router.post("/signup", signup).post("/signin", signin).post("/google", google).post("/update/:id" , verifyToken , updateUser).delete('/delete/:id' , verifyToken , deleteUser).get("/signout" , signOut).get('/listings/:id' , verifyToken , getUserListings);

export default router;
