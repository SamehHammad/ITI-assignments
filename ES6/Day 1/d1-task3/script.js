let fruits = ["orange", "banana", "strawbarry", "apple", "mango"];

let fString = fruits.every((item) => typeof item == "string");

console.log(`Fruits strings ${fString}`);

let fruitsStartWithA = fruits.some((item) => item.startsWith("a"));

console.log(`Fruits starts with A  ${fruitsStartWithA}`);

let filterdF = fruits.filter(
  (item) => item.startsWith("s") || item.startsWith("b")
);

console.log(`Fruits starts with S and B  ${filterdF}`);

let likedFruits = fruits.map((item) => `I Liked ${item}`);

console.log(`like Fruits :  ${likedFruits}`);

likedFruits.forEach((item) => console.log(item));
