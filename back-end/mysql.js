var mysql = require("mysql"); //

// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Although!12",
  database: "Mandalart"
});

connection.connect();

connection.query("SELECT * FROM mandalart", function(error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();
