const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "홍길동"
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "김양하"
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "이순신"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
