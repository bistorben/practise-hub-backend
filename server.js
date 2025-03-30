import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 5005;

// middlewares

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Test-Route
app.get("/", (req, res) => {
  res.send("API läuft!");
});

app.listen(PORT, () => {
  console.log("server is running");
});
