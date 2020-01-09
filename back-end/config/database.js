var mysql = require("mysql");

module.exports = function() {
  return {
    init: function() {
      return mysql.createConnection({
        port: "3306",
        host: "localhost",
        user: "root",
        password: "Although!12",
        database: "Mandalart"
      });
    },

    test_open: function(con) {
      con.connect(function(err) {
        if (err) {
          console.error("mysql connection error :" + err);
        } else {
          console.info("mysql is connected successfully.");
        }
      });
    }
  };
};
