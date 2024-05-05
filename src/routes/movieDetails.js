const { Router } = require("express");
const { getMovieDetails } = require("../controllers/moviesControllers");
// const { getTrendingTVs } = require("../controllers/tvsControllers");

const router = Router();

router.get("/:id", getMovieDetails);
// router.get("/tv", getTrendingTVs);

module.exports = router;
