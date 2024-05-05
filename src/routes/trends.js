const { Router } = require("express");
const { getTrendingMovies } = require("../controllers/moviesControllers");
const { getTrendingTVs } = require("../controllers/tvsControllers");

const router = Router();

router.get("/movies", getTrendingMovies);
router.get("/tv", getTrendingTVs);

module.exports = router;
