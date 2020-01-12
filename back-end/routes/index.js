var express = require("express");
var router = express.Router();
var pool = require("../config/database");
/* GET home page. */
router.post("/", async function(req, res, next) {
  const { number } = req.body;
  const sql = `insert into test values(${number})`;
  const result = await pool.pool.execute(sql);
  res.status(200).end();
});

module.exports = router;
