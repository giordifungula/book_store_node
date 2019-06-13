if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  // require the env
}
let express = require("express");

let app = express();

let expressLayouts = require("express-ejs-layouts");
// express layouts

let indexRouter = require("./routes/index");
// index will need to be import the index file will open on browser

// Configure the application
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));
// Folder which will store data

// Database Stores
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

// Check if database is connected
const db = mongoose.connection;
// console.log(mongoose.connection());
db.on("error", error => console.log(error));
db.once("once", () => console.log("Conneted to Mongoose"));

// set the index router
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
