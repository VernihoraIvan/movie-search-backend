// import express from "express";
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const moviesRouter = require("./src/routes/trendMovies");

require("dotenv").config();

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

//=========================================================

app.use("/movies", moviesRouter);

//=========================================================

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
