const { Router } = require("express");
const {
  getPersonDetailst,
  getAdditinalPersonDetailst,
} = require("../controllers/personControllers");

const router = Router();

router.get("/:id", getAdditinalPersonDetailst);
router.get("/:id/combined_credits", getPersonDetailst);

module.exports = router;
