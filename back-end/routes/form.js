var express = require("express");
var router = express.Router();
var pool = require("../config/database");
/* GET home page. */

router.post("/api/mandalform", async function(req, res, next) {
  // post방식
  // REST API
  // const { number } = req.body;
  // const sql = `insert into mandalart values(${number})`;
  const mandal = [
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
  const sql = `INSERT INTO mandaltest (goal100,goal10,goal20,goal30,goal40,goal50,goal60,goal70,goal80) VALUES (?,?,?,?,?,?,?,?,?)`;
  const result = await pool.on(sql, mandal);
  // console.log(result);
  res.status(200).send(result); // http의 상태는 200이고, end(send)는 return 이랑 비슷함.(end나 send가 없으면 무한정대기)
});

module.exports = router;
