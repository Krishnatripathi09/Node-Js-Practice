const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/secretData") {
    res.end("There is secret Data Don't Tell Anyone 🤫");
  }
  res.end("Hello requester");
});

server.listen(3000);
