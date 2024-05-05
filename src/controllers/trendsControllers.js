const { fetchMovies } = require("../api/connection");
// import { fetchMovies } from "../api/connection";

const getTrends = async (req, res) => {
  try {
    const data = await fetchMovies();
    console.log(data);
    // const data = await data.json();
    res.json({
      status: "success",
      code: 200,
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// res.json({
//   status: "success",
//   code: 200,
//   data: "Hello World!",
// });

module.exports = { getTrends };
