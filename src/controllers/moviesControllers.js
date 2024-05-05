const { fetchMovies, fetchMovieByQuery } = require("../api/connection");

const getTrendingMovies = async (req, res) => {
  try {
    const data = await fetchMovies();
    res.json({
      status: "success",
      code: 200,
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieByQuery = async (req, res) => {
  const { query, page } = req.query;
  try {
    const data = await fetchMovieByQuery(query, page);
    res.json({
      status: "success",
      code: 200,
      results: data,
      page,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTrendingMovies, getMovieByQuery };
