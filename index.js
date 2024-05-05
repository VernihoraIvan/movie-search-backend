const express = require("express");
require("dotenv").config();

require("dotenv").config();
const app = require("./app");

app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});
