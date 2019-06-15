// Database stored here

const mongoose = require("mongoose");

// Connect to the database

const authorSchema = new mongoose.Schema({
  // Schema database
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Author", authorSchema);
