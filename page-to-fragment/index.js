const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile(__dirname + "/index.html", (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8080);

http
  .createServer((req, res) => {
    fs.readFile(__dirname + "/target.html", (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8081);