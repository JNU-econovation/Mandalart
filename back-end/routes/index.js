var express = require("express");
var router = express.Router();
var pool = require("../config/database");
/* GET home page. */

router.post("/", async function(req, res, next) {
  //post방식
  //REST API
  // const { number } = req.body;
  // const sql = `insert into mandalart values(${number})`;
  const sql = `select * from mandalart`;
  const result = await pool.on(sql); //앞에 pool은 객체를 의미함
  console.log(result);
  res.status(200).send(result); // http의 상태는 200이고, end(send)는 return 이랑 비슷함.(값이 없으면 )
});

module.exports = router;
