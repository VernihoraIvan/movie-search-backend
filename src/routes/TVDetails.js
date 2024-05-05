const { Router } = require("express");
const { getTVDetails, getTVCast } = require("../controllers/tvsControllers");
// const { getTrendingTVs } = require("../controllers/tvsControllers");

const router = Router();

router.get("/:id", getTVDetails);
router.get("/:id/credits", getTVCast);

module.exports = router;
