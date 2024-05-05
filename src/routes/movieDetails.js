const { Router } = require("express");
const {
  getMovieDetails,
  getMovieCast,
} = require("../controllers/moviesControllers");
// const { getTrendingTVs } = require("../controllers/tvsControllers");

const router = Router();

router.get("/:id", getMovieDetails);
router.get("/:id/credits", getMovieCast);
// router.get("/tv", getTrendingTVs);

module.exports = router;
