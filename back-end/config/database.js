var mysql = require("mysql2");

exports.pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "mandalplan",
  password: "wjddls0709!",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
