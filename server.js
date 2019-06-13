if (process.env.NODE_ENV !== "production") {
<<<<<<< HEAD
  //   require("dotenv").load();
=======
  require("dotenv").config;
>>>>>>> setting_up_server
  // require the env
}
let express = require("express");

let app = express();

let expressLayouts = require("express-ejs-layouts");
<<<<<<< HEAD

let indexRouter = require("./routes/index");
// index will need to be imported to the application
=======
// express layouts

let indexRouter = require("./routes/index");
// index will need to be import the index file will open on browser
>>>>>>> setting_up_server

// Configure the application
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));
<<<<<<< HEAD

// connect to database
let mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
  //   Mongoose uses a older way that is deprecated so you need this
});
// Check if connected
const db = mongoose.connection();
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));

// index of application
=======
// Folder which will store data

// set the index router
>>>>>>> setting_up_server
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
