const http = require("http");
const fs = require("fs");
const Tailor = require("node-tailor");
const tailor = new Tailor({ templatesPath: "./templates" });

// Template-Server
const server = http.createServer(tailor.requestHandler);
server.listen(process.env.PORT || 8080);

// Fragment server
http
  .createServer((req, res) => {
    fs.readFile(__dirname + req.url, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8081);
