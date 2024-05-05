// import express from "express";
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const moviesRouter = require("./src/routes/trends");
const searchRouter = require("./src/routes/search");
const movieDetailsRouter = require("./src/routes/movieDetails");
const tvDetailsRouter = require("./src/routes/TVDetails");

require("dotenv").config();

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

//=========================================================

app.use("/trending", moviesRouter);
app.use("/search", searchRouter);
app.use("/movie", movieDetailsRouter);
app.use("/tv", tvDetailsRouter);

//=========================================================

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
