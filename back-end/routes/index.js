var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express1" });
});

router.get("/name", function(req, res, next) {
  const mok = [
    {
      name: "깈기표"
    }
  ];
  res.send(mok);
});

module.exports = router;
