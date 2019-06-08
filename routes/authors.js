let express = require("express");

let router = express.Router();

// ALl Authors Route

router.get("/", (req, res) => {
  res.render("authors/index");
});

// New Author route
router.get("/new", (req, res) => {
  res.render("authors/new");
});
module.exports = router;
