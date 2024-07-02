const net = require("net");
const port = Number(process.argv[2]);

function zeroFiller(i) {
  return (i < 10 ? "0" : "") + i;
}

function currentTime() {
  const actualDate = new Date();
  return (
    actualDate.getFullYear() +
    "-" +
    zeroFiller(actualDate.getMonth() + 1) +
    "-" +
    zeroFiller(actualDate.getDate()) +
    " " +
    zeroFiller(actualDate.getHours()) +
    ":" +
    zeroFiller(actualDate.getMinutes())
  );
}

const server = net.createServer((socket) => {
  socket.end(currentTime() + "\n");
});
server.listen(port);
