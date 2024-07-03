const http = require("http");
let url = require("url");
const port = Number(process.argv[2]);
const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    url = url.parse(request.url, true);
    response.end(JSON.stringify(parseQuery(url)));
  } else {
    response.writeHead(405);
    response.end();
  }
});

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

function unixTime(time) {
  return { unixtime: time.getTime() };
}

let parseQuery = (url) => {
  switch (url.pathname) {
    case "/api/parsetime":
      return parseTime(new Date(url.query.iso));
    case "/api/unixtime":
      return unixTime(new Date(url.query.iso));
    default:
      return "Enter a valid endpoint url";
  }
};

server.listen(port);
