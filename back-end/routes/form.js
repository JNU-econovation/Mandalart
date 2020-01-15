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
    req.body.name,
    req.body.goal,
    req.body.description,
    req.body.mail,
    req.body.goal100,
    req.body.goal10,
    req.body.goal20,
    req.body.goal30,
    req.body.goal40,
    req.body.goal50,
    req.body.goal60,
    req.body.goal70,
    req.body.goal80,
    req.body.goal11,
    req.body.goal12,
    req.body.goal13,
    req.body.goal14,
    req.body.goal15,
    req.body.goal16,
    req.body.goal17,
    req.body.goal18,
    req.body.goal21,
    req.body.goal22,
    req.body.goal23,
    req.body.goal24,
    req.body.goal25,
    req.body.goal26,
    req.body.goal27,
    req.body.goal28,
    req.body.goal31,
    req.body.goal32,
    req.body.goal33,
    req.body.goal34,
    req.body.goal35,
    req.body.goal36,
    req.body.goal37,
    req.body.goal38,
    req.body.goal41,
    req.body.goal42,
    req.body.goal43,
    req.body.goal44,
    req.body.goal45,
    req.body.goal46,
    req.body.goal47,
    req.body.goal48,
    req.body.goal51,
    req.body.goal52,
    req.body.goal53,
    req.body.goal54,
    req.body.goal55,
    req.body.goal56,
    req.body.goal57,
    req.body.goal58,
    req.body.goal61,
    req.body.goal62,
    req.body.goal63,
    req.body.goal64,
    req.body.goal65,
    req.body.goal66,
    req.body.goal67,
    req.body.goal68,
    req.body.goal71,
    req.body.goal72,
    req.body.goal73,
    req.body.goal74,
    req.body.goal75,
    req.body.goal76,
    req.body.goal77,
    req.body.goal78,
    req.body.goal81,
    req.body.goal82,
    req.body.goal83,
    req.body.goal84,
    req.body.goal85,
    req.body.goal86,
    req.body.goal87,
    req.body.goal88
  ];
  const sql = `INSERT INTO mandalart (
    name,
    goal,
    description,
    mail,
    goal100,
    goal10,
    goal20,
    goal30,
    goal40,
    goal50,
    goal60,
    goal70,
    goal80,
    goal11,
    goal12,
    goal13,
    goal14,
    goal15,
    goal16,
    goal17,
    goal18,
    goal21,
    goal22,
    goal23,
    goal24,
    goal25,
    goal26,
    goal27,
    goal28,
    goal31,
    goal32,
    goal33,
    goal34,
    goal35,
    goal36,
    goal37,
    goal38,
    goal41,
    goal42,
    goal43,
    goal44,
    goal45,
    goal46,
    goal47,
    goal48,
    goal51,
    goal52,
    goal53,
    goal54,
    goal55,
    goal56,
    goal57,
    goal58,
    goal61,
    goal62,
    goal63,
    goal64,
    goal65,
    goal66,
    goal67,
    goal68,
    goal71,
    goal72,
    goal73,
    goal74,
    goal75,
    goal76,
    goal77,
    goal78,
    goal81,
    goal82,
    goal83,
    goal84,
    goal85,
    goal86,
    goal87,
    goal88 ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const result = await pool.on(sql, mandal);
  console.log(result);
  res.status(200).send(result); // http의 상태는 200이고, end(send)는 return 이랑 비슷함.(end나 send가 없으면 무한정대기)
});

module.exports = router;
// var express = require("express");
// var router = express.Router();
// var pool = require("../config/database");
// /* GET home page. */

// router.post("/api/mandalform", async function(req, res, next) {
//   // post방식
//   // REST API
//   // const { number } = req.body;
//   // const sql = `insert into mandalart values(${number})`;
//   const mandal = [
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
//   const sql = `INSERT INTO mandaltest (goal100,goal10,goal20,goal30,goal40,goal50,goal60,goal70,goal80) VALUES (?,?,?,?,?,?,?,?,?)`;
//   const result = await pool.on(sql, mandal);
//   console.log(result);
//   res.status(200).send(result); // http의 상태는 200이고, end(send)는 return 이랑 비슷함.(end나 send가 없으면 무한정대기)
// });

// module.exports = router;
