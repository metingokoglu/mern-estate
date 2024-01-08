import express from "express";
import {
  createListing,
  deleteListing,
<<<<<<< HEAD
  updateListing,
=======
>>>>>>> 58e90cee0162794b0415797a7cc1fefdf1c3cf50
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
<<<<<<< HEAD
router.post("/update/:id", verifyToken, updateListing);

=======
>>>>>>> 58e90cee0162794b0415797a7cc1fefdf1c3cf50
export default router;
