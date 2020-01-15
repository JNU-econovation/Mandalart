var express = require("express");
var router = express.Router();
var pool = require("../config/database");
/* GET home page. */

router.post("/api/property", async function(req, res, next) {
  // post방식
  // REST API
  // const { number } = req.body;
  // const sql = `insert into mandalart values(${number})`;
  const property = [
    req.body.name,
    req.body.goal,
    req.body.description,
    req.body.mail
  ];
  const sql = `INSERT INTO test2 (name,goal,description,mail) VALUES (?,?,?,?)`;
  const result = await pool.on(sql, property);
  console.log(result);
  res.status(200).send(result); // http의 상태는 200이고, end(send)는 return 이랑 비슷함.(end나 send가 없으면 무한정대기)
});

module.exports = router;
