// const http = require('http');
import http from "http";

const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Helloo there World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server up and running at http://${hostname}:${port}`);
});
