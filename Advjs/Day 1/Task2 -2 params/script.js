function onlyTwoParams(a, b) {
  if (arguments.length === 2) {
    return a - b;
  }
  throw new Error('Function only accepts 2 parameters');
}
  
console.log(onlyTwoParams(5,4));
