import express from "express";
import { getTest } from "../controllers/testController.js";

const router = express.Router();

// GET /api
router.get("/", getTest);

export default router;
