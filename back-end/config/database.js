var mysql = require("mysql");

module.exports = function() {
  return {
    init: function() {
      return mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "wjddls0709!",
        database: "mandalplan",
        insecureAuth: true
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
