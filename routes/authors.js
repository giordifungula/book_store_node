let express = require("express");

let router = express.Router();

let Author = require("../models/author");

// ALl Authors Route
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New Author route
router.get("/new", (req, res) => {
  res.render("authors/new", {
    author: new Author()
    // creates a new author from database
  });
});

// Creating th author route
router.post("/", (req, res) => {
  res.send("Create");
});
module.exports = router;
