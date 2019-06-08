let express = require("express");

let router = express.Router();

// Getting info from the server

router.get("/", (req, res) => {
  res.send("We are sending to the Server");
});
