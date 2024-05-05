const { Router } = require("express");
const {
  getPersonDetailst,
  getAdditionalPersonDetailst,
} = require("../controllers/personControllers");

const router = Router();

router.get("/:id", getAdditionalPersonDetailst);
router.get("/:id/combined_credits", getPersonDetailst);

module.exports = router;
