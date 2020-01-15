var mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "mandalplan",
  password: "wjddls0709!",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const Pool = {
  on: async function(sql, parameter = []) {
    try {
      const connection = await pool.getConnection();
      try {
        const [rows] = await connection.execute(sql, parameter);
        connection.release();
        return rows;
      } catch (error) {
        connection.release();
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Pool;
