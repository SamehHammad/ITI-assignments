const iterObj = {
  name: "sameh",
  age: 27,
  track: "Front",
  [Symbol.iterator]: function () {
    let keys = Object.keys(iterObj);
    let counter = 0;
    return {
      next: function () {
        if (counter === keys.length) {
          return { value: undefined, done: true };
        } else {
          return { value: iterObj[keys[counter++]], done: false };
        }
      },
    };
  },
};

const iterator = iterObj[Symbol.iterator](); // initialize the iterator

for (let value of iterObj) {
  // use "value" instead of destructuring [key, value]
  console.log(value);
}

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
