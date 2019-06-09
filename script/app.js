const express = require("express"),
  path = require("path")

let app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.listen(8080);
console.log('http://localhost:8080  已启动');