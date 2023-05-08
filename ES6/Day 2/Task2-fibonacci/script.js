//* Implementation 1:
function* fibonacciByCount(count) {
  let [num1, num2, nextTerm] = [0, 1, 0];
  for(let i = 0; i < count; i++) {
    yield num1;
    nextTerm = num1 + num2;
    [num1, num2] = [num2, nextTerm];
  }
}

//* Implementation 2:
function* fibonacciByMaxValue(maxValue) {
  let [num1, num2, nextTerm] = [0, 1, 0];
  while(num1 <= maxValue) {
    yield num1;
    nextTerm = num1 + num2;
    [num1, num2] = [num2, nextTerm];
  }
}

//* Displaying the first 10 numbers in the series
const fibonacci10 = fibonacciByCount(7);
for(const number of fibonacci10) {
  console.log(number);
}

//* Displaying the series up to a maximum value of 100
const fibonacciMax100 = fibonacciByMaxValue(50);
for(const number of fibonacciMax100) {
  console.log(number);
}
