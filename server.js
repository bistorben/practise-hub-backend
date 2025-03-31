import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import testRouter from "./routes/testRouter.js";
import heroBoschRouter from "./routes/heroBoschRouter.js";

const app = express();
const PORT = 5005;

// middlewares

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api", testRouter);
app.use("/api/hero-bosch", heroBoschRouter);

app.listen(PORT, () => {
  console.log("server is running");
});
