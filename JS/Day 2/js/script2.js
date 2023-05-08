// Task 1.2

// Prompt the user for 5 numbers and store them in an array
const numbers = [];5
for (let i = 0; i < 5; i++) {
  const num = prompt(`Enter number ${i + 1}:`);
  numbers.push(Number(num));
}
document.write(
  `<h2 style="color:red">You have entered the values of :  <span style="color:black">${numbers.join(
    " , "
  )}</span></h2>`
);
// Sort the array in descending order and display it
const descending = numbers.sort((a, b) => b - a);
document.write(
  `<h2 style="color:red">Your values after sorting descending :  <span style="color:black">${descending.join(
    " , "
  )}</span></h2>`
);
// Sort the array in ascending order and display it
const ascending = numbers.sort((a, b) => a - b);
document.write(
  `<h2 style="color:red">Your values after sorting ascending :  <span style="color:black">${ascending.join(
    " , "
  )}</span></h2>`
);
