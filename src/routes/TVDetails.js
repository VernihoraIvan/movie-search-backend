const { Router } = require("express");
const { getTVDetails } = require("../controllers/tvsControllers");
// const { getTrendingTVs } = require("../controllers/tvsControllers");

const router = Router();

router.get("/:id", getTVDetails);

module.exports = router;
