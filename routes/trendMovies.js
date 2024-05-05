const { Router } = require("express");
const { getTrends } = require("../controllers/trendsControllers");

const router = Router();

// router.get("/trend", (req, res) => {
//   res.send("Hello World!");
// });

router.get("/", getTrends);

module.exports = router;
