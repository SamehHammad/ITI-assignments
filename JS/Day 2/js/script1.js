// Task 1.1

const numbers = [];
let sum = 0;
let multi = 1;
let subtract = 0;
let division = 1;
const myLength = parseInt(prompt(`How Many of numbers you will enter ?:`));
for (let i = 0; i < myLength; i++) {
  const num = parseInt(prompt(`Enter number ${i + 1}:`));
  numbers.push(Number(num));

  sum += num;
  multi *= num;
  division /= num;
  subtract -= num;
}
console.log(division);
document.write(
  `<h2 style="color:red"> Sum Of Your Values :  <span style="color:black">${numbers.join(
    " + "
  )} = </span><span style="color:#AEF359">${sum}</span></h2>`
);
document.write(
  `<h2 style="color:red"> Multiplication Of Your Values :  <span style="color:black">${numbers.join(
    " * "
  )} = </span><span style="color:#AEF359">${multi}</span></h2>`
);
document.write(
  `<h2 style="color:red"> Division Of Your Values :  <span style="color:black">${numbers.join(
    " / "
  )} = </span><span style="color:#AEF359">${division.toFixed(4)}</span></h2>`
);
document.write(
  `<h2 style="color:red"> Subtarction Of Your Values :  <span style="color:black">${numbers.join(
    " - "
  )} = </span><span style="color:#AEF359">${subtract}</span></h2>`
);
