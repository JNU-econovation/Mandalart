const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

const data = fs.readFileSync("../config/database.json");
const conf = JSON.parse(data);
const mysql2 = require("mysql2");

/*
const multer = require("multer");
const upload = multer({ dest: "./upload" });
*/

/*
const connection = mysql2.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();
*/

/*
app.get("/api/property", (req, res) => {
  connection.query("SELECT*FROM addmandal", (err, rows, fields) => {
    res.send(rows);
  });
});
app.use("/image", express.static("./upload"));
*/

/*
app.post("/api/properties", upload.single("image"), (res, req) => {
  let sql = "INSERT INTO addmandal VALUES (null,?,?,?,?,?)";
  let fileName = "/image/" + req.file.fileName;
  let mandalName = req.body.mandalName;
  let mandalGoal = req.body.mandalGoal;
  let mandalDescription = req.body.mandalDescription;
  let userEmail = req.body.userEmail;
  let params = [fileName, mandalName, mandalGoal, mandalDescription, userEmail];
  console.log("insert");
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
*/

/*
router.post("/api/properties", function(req, res, next) {
  var body = req.body;
  var fileName = req.body.fileName;
  var mandalName = req.body.mandalName;
  var mandalGoal = req.body.mandalGoal;
  var mandalDescription = req.body.mandalDescription;
  var userEmail = req.body.userEmail;

  connection.query(
    "insert into addmandal (name, goal, description, mail, image) values (?,?,?,?,?)",
    [fileName, mandalName, mandalGoal, mandalDescription, userEmail],
    function(err, rows) {
      res.redirect("/api/properties");
    }
  );
});
*/
