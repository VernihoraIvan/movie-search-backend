const express = require("express");
const router = express.Router();
// const { nanoid } = require("nanoid");

require("dotenv").config();
const app = require("./app");

// let tasks = [
//   {
//     id: nanoid(),
//     title: "Work",
//     text: "Do it!",
//     done: false,
//   },
// ];

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
