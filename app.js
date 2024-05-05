const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const moviesRouter = require("./routes/trendMovies");

require("dotenv").config();

const app = express();
// const formatsLogger = app.get("env") === "development" ? "dev" : "short";
// app.use(logger(formatsLogger));
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

//=========================================================

app.use("/movies", moviesRouter);
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
