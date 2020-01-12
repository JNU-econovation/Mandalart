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

app.post("/api/mandalform", function(req, res) {
  const data = [
    req.body.goal100,
    req.body.goal10,
    req.body.goal20,
    req.body.goal30,
    req.body.goal40,
    req.body.goal50,
    req.body.goal60,
    req.body.goal70,
    req.body.goal80
  ];

  const sql =
    "INSERT INTO mandaltest(goal100,goal10,goal20,goal30,goal40,goal50,goal60,goal70,goal80) VALUES(?,?,?,?,?,?,?,?,?)";
  connection.query(sql, data, function(err) {
    if (err) {
      console.error(err);
      res.json({ message: "fail" });
    } else {
      res.json({ message: "success" });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
