// Task 2


let radius = prompt("Enter the radius of a circle:");

let area = Math.PI * Math.pow(radius, 2);

alert("The area of the circle is " + area.toFixed(2));

let value = prompt("Enter a value to calculate its square root:");

let squareRoot = Math.sqrt(value);
alert("The square root of " + value + " is (" + squareRoot.toFixed(2) +")");

let angle = prompt("Enter an angle in degrees:");
let radians = angle * Math.PI / 180;
let cos = Math.cos(radians);
document.write("cos " + angle + "°  is " + cos.toFixed(2));
