let express = require("express");
// set up the express router

let router = express.Router();
// will set router

// Getting info from the server

router.get("/", (req, res) => {
  res.render("index");
});
<<<<<<< HEAD
// Application has to be imported into the server
=======
>>>>>>> setting_up_server

module.exports = router;
