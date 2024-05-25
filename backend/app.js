const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorMiddleWare = require("./middleware/error");
const path = require("path");
const cors = require("cors");

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route Imports
const todoRoute = require("./routes/todoRoute.js");

app.use(cors());
app.use("/api/v1", todoRoute);

//=============================for live api check===============================

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// ================================================================

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.set("trust proxy", 1);

//MidleWare For Error
app.use(errorMiddleWare);

module.exports = app;
