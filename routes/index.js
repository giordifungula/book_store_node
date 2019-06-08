let express = require("express");

let router = express.Router();

// Getting info from the server

router.get("/", (req, res) => {
  res.render("index");
});
// Application has to be imported into the server

module.exports = router;
