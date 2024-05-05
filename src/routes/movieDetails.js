const { Router } = require("express");
const {
  getMovieDetails,
  getMovieCast,
  getMovieReview,
} = require("../controllers/moviesControllers");
// const { getTrendingTVs } = require("../controllers/tvsControllers");

const router = Router();

router.get("/:id", getMovieDetails);
router.get("/:id/credits", getMovieCast);
router.get("/:id/reviews", getMovieReview);
// router.get("/tv", getTrendingTVs);

module.exports = router;
