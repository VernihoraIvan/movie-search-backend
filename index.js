const express = require("express");
const router = express.Router();

require("dotenv").config();
const app = require("./app");

app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});
