// const os= require("os")
const { log } = require("console");
const fs = require("fs");
// let result = require('./app.js');
// const { log } = require("console");
// console.log(result.res(5, 25));
// console.log(os.hostname());
// console.log(os.freemem());
fs.writeFile(
  "./sameh.txt",
  "my name is sameh hammad shaban ahmed gad",
  function (err) {
    console.log(err);
  }
);
// fs.appendFile(
//   "./sameh.txt",
//   "my name is sameh hammad shaban ahmed gad",
//   function (err) {
//     console.log(err);
//   }
// );
// fs.unlink("./sameh.txt", function (err) { });
