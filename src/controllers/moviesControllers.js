const {
  fetchMovies,
  fetchMovieByQuery,
  fetchMovieDetails,
  fetchMovieCast,
} = require("../api/connection");

const getTrendingMovies = async (req, res) => {
  try {
    const response = await fetchMovies();
    res.json({
      status: "success",
      code: 200,
      response,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieByQuery = async (req, res) => {
  const { query, page } = req.query;
  try {
    const response = await fetchMovieByQuery(query, page);
    console.log(response);
    res.json({
      status: "success",
      code: 200,
      results: response,
      page,
    });
  } catch (error) {
    console.log(error);
  }
};

const getMovieDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetchMovieDetails(id);
    console.log(response);
    res.json({
      status: "success",
      code: 200,
      results: response,
    });
  } catch (error) {
    console.log(error);
  }
};

const getMovieCast = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetchMovieCast(id);
    console.log(response);
    res.json({
      status: "success",
      code: 200,
      results: response,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTrendingMovies,
  getMovieByQuery,
  getMovieDetails,
  getMovieCast,
};
