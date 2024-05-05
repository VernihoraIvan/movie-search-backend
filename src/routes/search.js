const { Router } = require("express");
const { getMovieByQuery } = require("../controllers/moviesControllers");
// const { getTrendingTVs } = require("../controllers/tvsControllers");

const router = Router();

router.get("/movie", getMovieByQuery);
// router.get("/tv", getTrendingTVs);

module.exports = router;
