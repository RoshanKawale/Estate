import express from "express";
import { createListing, deleteListing, getListing, updateListing } from "../controller/listing.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create" , verifyToken , createListing).delete('/delete/:id' , verifyToken , deleteListing).post('/update/:id', verifyToken, updateListing).get('/get/:id', getListing);

export default router;