
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!" });
});

const data = fs.readFileSync("./config/database.json");
const conf = JSON.parse(data);
const mysql2 = require("mysql2");

const multer = require("multer");
// const upload = multer({ dest: "./upload" });

const connection = mysql2.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();
app.post(
  "/api/property",
  /*upload.single("image")*/ (res, req) => {
    let sql =
      "INSERT INTO addmandal(image, name, goal, description, mail) VALUES (?,?,?,?,?)";
    let image = req.body.image;
    let name = req.body.mandalName;
    let goal = req.body.mandalGoal;
    let description = req.body.mandalDescription;
    let mail = req.body.userEmail;
    let params = [image, name, goal, description, mail];
    console.log("insert");
    connection.query(sql, params, (err, rows, fields) => {
      res.send(rows);
    });
  }
);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(port, () => console.log(`Listening on port ${port}`));


