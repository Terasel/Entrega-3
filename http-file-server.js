const http = require("http");
var fs = require("fs");
const port = Number(process.argv[2]);
const file = process.argv[3];
const server = http.createServer((request, response) => {
  fs.createReadStream(file).pipe(response);
});
server.listen(port);
