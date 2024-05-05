const { Router } = require("express");
const { getMovieByQuery } = require("../controllers/moviesControllers");

const router = Router();

router.get("/movies", getMovieByQuery);

module.exports = router;
