//!NEW CODE

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";
import dbConnection from "./DBconfig/index.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import router from "./Routes/index.js";
import mongoose from "mongoose";

dotenv.config();

const __dirname = path.resolve(path.dirname(""));

const app = express();

app.use(express.static(path.join(__dirname, "./Views/build/index.html")));

const PORT = process.env.PORT || 8800;
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "favicon.ico"));
});

dbConnection();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(router);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
