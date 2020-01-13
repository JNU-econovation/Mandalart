var express = require("express");
var router = express.Router();
var pool = require("../config/database");

router.post("/api/mandalform", async function(req, res, next) {
  const sql = `INSERT INTO mandaltest(goal100,goal10,goal20,goal30,goal40,goal50,goal60,goal70,goal80) VALUES(?,?,?,?,?,?,?,?,?)`;
  const result = await pool.on(sql);
  console.log(req.body);
  console.log(result);
  res.status(200).send(result);
});

module.exports = router;
