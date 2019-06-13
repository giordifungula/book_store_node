let express = require("express");
// set up the express router

let router = express.Router();
// will set router

// Getting info from the server

router.get("/", (req, res) => {
  res.send("We are sending to the Server");
});

module.exports = router;
