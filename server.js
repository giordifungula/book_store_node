if (process.env.NODE_ENV !== "production") {
  //   require("dotenv").load();
  // require the env
}
let express = require("express");

let app = express();

let expressLayouts = require("express-ejs-layouts");

let indexRouter = require("./routes/index");
// index will need to be imported to the application

// Configure the application
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));

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
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
