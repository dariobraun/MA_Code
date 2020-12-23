const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile(__dirname + "/header.js", (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8080);