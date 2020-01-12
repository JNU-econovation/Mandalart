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

app.listen(port, () => console.log(`Listening on port ${port}`));

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
