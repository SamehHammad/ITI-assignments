const http = require("http");
const fs = require("fs");
const server = http.createServer();
const PORT = 3000;

// server.on("request", function (req, res) {

//     console.log("request: reseved from" + req.url);
//     res.write("Server created successfully");
//     res.end()
// })
server.on("request", function (req, res) {
  if (req.url == "/") {
    res.write("Server created successfully HOME PAGE");
    res.end();
  } else if (req.url == "/sameh") {
    fs.readFile("./sameh.html", function (err, data) {
      if (err) console.log(err);
      else {
          res.write(data.toString());
          res.end();
      }
    });
  }
});
server.listen(PORT, function () {
  console.log("lestining server on port " + PORT);
});
