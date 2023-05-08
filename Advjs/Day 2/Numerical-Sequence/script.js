'use strict';
function Sequence(start = 0, end, step = 2) {
  let list = [];

  for (var i = start; i <= end; i += step) {
    list.push(i);
  }
  console.log(list); //to check the list array

  //get:
  this.getSequence = function () {
    return list.slice();
  };

  //Append: (put value at the end)
  this.append = function (value) {
    let lastEleList = list.slice(-1);
    let expectedValue = lastEleList[0] + step;
    if (value === expectedValue || value === list.includes(value)) {
      list.push(value);
      list.sort((a, b) => a - b);
      console.log(list);
    } else
      throw new Error(
        'Value already exists in sequence or the number is not the same step of sequance'
      );
  };

  //pop: remove from the end:
  this.pop = function () {
    if (list.length > 0) {
      list.pop();
      list.sort((a, b) => a - b);
      console.log(list);
    } else throw new Error('element is removed');
  };
}

var seq = new Sequence(0, 4, 2);

//test

seq.append(6);

seq.append(8);

seq.pop(6);

seq.append(9);

