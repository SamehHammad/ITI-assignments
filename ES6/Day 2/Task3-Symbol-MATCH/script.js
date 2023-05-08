const myOpj = {
  [Symbol.MATCH]: function(str) {
    if (str.length > 15) {
      return str.substring(0, 15) + '...';
    } else {
      return str;
    }
  }
};
//*Test in console
const longString = 'This is a very long string that exceeds 15 characters';
const shortenedString = myOpj[Symbol.MATCH](longString);
console.log(shortenedString); //* 'This is a very ...'
