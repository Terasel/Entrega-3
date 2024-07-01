const http = require("http");
const bl = require("bl");
let result = [];
let counter = 0;

function showResult() {
  for (let i = 0; i < 3; i++) console.log(result[i]);
}

function httpGet(index) {
  http.get(process.argv[2 + index], (response) => {
    response.pipe(
      bl((error, data) => {
        if (error) return console.error(error);
        result[index] = data.toString();
        counter++;
        if (counter == 3) showResult();
      })
    );
  });
}

for (let i = 0; i < 3; i++) httpGet(i);
