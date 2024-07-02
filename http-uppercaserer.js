const http = require("http");
const map = require("through2-map");
const port = Number(process.argv[2]);
const server = http.createServer((request, response) => {
  if (request.method != "POST")
    return response.end(
      "*waves hand* This is not the POST you're looking for\n"
    );
  request
    .pipe(
      map((chunk) => {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(response);
});
server.listen(port);
