const express = require("express");
const app = express();

app.get("/:op/*", (req, res) => {
  const { op } = req.params;
  const nums = req.params[0].split("/").map(Number);

  let result;

  switch (op) {
    case "add":
      result = nums.reduce((acc, num) => acc + num, 0);
      break;
    case "mult":
      result = nums.reduce((acc, num) => acc * num, 1);
      break;
    case "div":
      result = nums.reduce((acc, num) => acc / num);
      break;
    case "sub":
      result = nums.reduce((acc, num) => acc - num);
      break;
    default:
      res.send("Invalid operation");
      return;
  }

  res.send("The Result of "+op+" = "+result);
});

app.listen(7005, () => {
  console.log("Server started");
});
