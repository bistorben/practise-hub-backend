import express from "express";
import { addNewLink } from "../controllers/heroBoschController.js";

const router = express.Router();

// api/hero-bosch
router.post("/", addNewLink);

export default router;
