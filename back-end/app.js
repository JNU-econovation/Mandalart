var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
var formRouter = require("./routes/form");
var app = express();

app.use(logger("dev"));
app.use(express.json()); //body parser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //쿠키파싱.
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use("/", formRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
//정인 add mandal 페이지를 위해 필요한 내용
// app.post("/api/mandalform", function(req, res) {
//   const data = [
//     req.body.goal100,
//     req.body.goal10,
//     req.body.goal20,
//     req.body.goal30,
//     req.body.goal40,
//     req.body.goal50,
//     req.body.goal60,
//     req.body.goal70,
//     req.body.goal80
//   ];

//   const sql =
//     "INSERT INTO mandaltest(goal100,goal10,goal20,goal30,goal40,goal50,goal60,goal70,goal80) VALUES(?,?,?,?,?,?,?,?,?)";
//   connection.query(sql, data, function(err) {
//     if (err) {
//       console.error(err);
//       res.json({ message: "fail" });
//     } else {
//       res.json({ message: "success" });
//     }
//   });
// });

module.exports = app;
