const { Router } = require("express");
const { getPersonDetailst } = require("../controllers/personControllers");

const router = Router();

router.get("/:id/combined_credits", getPersonDetailst);

module.exports = router;
