const http = require("http");
const url = process.argv[2];
var collector = "";

http.get(url, (response) => {
  response.on("data", (appendage) => {
    collector += appendage;
  });
  response.on("end", () => {
    console.log(collector.length);
    console.log(collector);
  });
});
