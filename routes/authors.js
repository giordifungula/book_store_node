let express = require("express");

let router = express.Router();

// ALl Authors Route

router.get("/", (req, res) => {
  res.render("authors/index");
});

// New Author route
router.get("/", (req, res) => {
  res.render("authors/new");
});

// Creating th author route
router.post("/", (req, res) => {
  res.send("Create");
});
module.exports = router;
