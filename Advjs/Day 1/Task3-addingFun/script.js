function addNumbers() {
  if (arguments.length === 0) {
    throw new Error('Function requires at least one parameter');
  }

  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    let num = arguments[i];
    if (typeof num !== 'number') {
      throw new TypeError('All parameters must be numbers');
    }
    sum += num;
  }
  return sum;
}

console.log(addNumbers(5,4));
