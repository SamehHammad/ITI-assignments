// Task 1

// var user = prompt("Enter a message ")
// for (let i = 1; i < 6; i++){
// document.write(`<h${i}>${user}</h$${i}>`);}

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// Task 2

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// Task 3*1

// let str = prompt("Enter a string:");

// let considerCase = confirm("Consider case sensitivity?");

// if (!considerCase) {
//   str = str.trim().toLowerCase();
// }
// let reversedStr = str.split("").reverse().join("");
// if (str === reversedStr) {
//     document.write(`${str} is a palindrome.`);
// } else {
//     document.write(`${str} is not a palindrome.`);

// }

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

//*Task 3*1

// let displayP = document.getElementById("message");
// var userStr = prompt("Enter the string");
// let isAgree = confirm("Consider case sensitivity?");
// let isPalinR = false;

// if (!isAgree) {
//   userStr = userStr.toLowerCase();
// }
// for (let i = 0; i < userStr.length / 2; i++) {
//   if (userStr.charAt(i) === userStr[userStr.length - 1 - i]) {
//     isPalinR = true;
//     console.log(`${userStr.toLowerCase()} : is  palindrome`);
//     displayP.innerHTML = `${userStr.toLowerCase()} : is  palindrome`;
//   } else {
//     isPalinR = false;
//     console.log(`${userStr} is not palindrome`);
//     displayP.innerHTML = `${userStr} is not palindrome`;
//   }
// }
// if (isAgree && userStr.toLowerCase() === userStr.toUpperCase()) {
//   isPalinR = false;
// }
// console.log(isPalinR);

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// Task 3.2

// const nameeRegex = /^[a-zA-Z]/;
// const phoneNumberRegex = /^\d{8}$/;
// const mobileNumberRegex = /^(010|011|012)/;
// const emailRegex = /\w@/;

// const namee = prompt("Please enter your name:");

// if (!nameeRegex.test(namee)) {
//   alert(`Invalid name format. Please enter a valid name`);
// } else {
//   const phoneNumber = prompt("Please enter your phone number (8 digits only):");
//   if (!phoneNumberRegex.test(phoneNumber)) {
//     alert(`Invalid phone number format.enter a valid number (8 digits only)`);
//   } else {
//     const mobileNumber = prompt(
//       "Please enter your mobile number (must start with 010, 011 or 012):"
//     );
//     if (!mobileNumberRegex.test(mobileNumber)) {
//       alert(
//         `Invalid mobile number format.enter a valid number(must start with 010, 011 or 012)`
//       );
//     } else {
//       const email = prompt("Please enter your email address:");
//       if (!emailRegex.test(email)) {
//         alert(`Invalid email format.enter a valid email(must must contain @)`);
//       } else {
//         const color = prompt(
//           "Please choose a color for display your message (red/green/blue):"
//         );
//         let displayInfo = document.getElementById("message");

//         let formattedMessage;
//         switch (color) {
//           case "red":
//             formattedMessage = `<h2 style="color: red;">Welcome ! Your information has been validated.<br>name:===>  ${namee}<br>Phone number:===> ${phoneNumber}<br>Mobile number:===> ${mobileNumber}<br>Email:===> ${email}</h2>`;
//             break;
//           case "green":
//             formattedMessage = `<h2 style="color: green;">Welcome ! Your information has been validated.<br>name:===>  ${namee}<br>Phone number:===> ${phoneNumber}<br>Mobile number:===> ${mobileNumber}<br>Email:===> ${email}</h2>`;
//             break;
//           case "blue":
//             formattedMessage = `<h2 style="color: blue;">Welcome ! Your information has been validated.<br>name:===>  ${namee}<br>Phone number:===> ${phoneNumber}<br>Mobile number:===> ${mobileNumber}<br>Email:===> ${email}</h2>`;
//             break;
//           default:
//             displayInfo.innerHTML = `<h2 style="color: black;">Invalid color choice. Please choose either red, green, or blue.</h2>`;
//         }
//         displayInfo.innerHTML = formattedMessage;
//       }
//     }
//   }
// }

// const nameeRegex = /^[a-zA-Z]/;
// const phoneNumberRegex = /^\d{8}$/;
// const mobileNumberRegex = /^(010|011|012)/;
// const emailRegex = /\w@/;
// let isValid = true;

// do {
//   const namee = prompt("Please enter your name:");
//   if (!nameeRegex.test(namee)) {
//     alert(`Invalid name format. Please enter a valid name`);
//     isValid = false;
//     continue;
//   }

//   const phoneNumber = prompt("Please enter your phone number (8 digits only):");
//   if (!phoneNumberRegex.test(phoneNumber)) {
//     alert(`Invalid phone number format. Enter a valid number (8 digits only)`);
//     isValid = false;
//     continue;
//   }

//   const mobileNumber = prompt(
//     "Please enter your mobile number (must start with 010, 011 or 012):"
//   );
//   if (!mobileNumberRegex.test(mobileNumber)) {
//     alert(
//       `Invalid mobile number format. Enter a valid number (must start with 010, 011 or 012)`
//     );
//     isValid = false;
//     continue;
//   }

//   const email = prompt("Please enter your email address:");
//   if (!emailRegex.test(email)) {
//     alert(`Invalid email format. Enter a valid email (must contain @)`);
//     isValid = false;
//     continue;
//   }

//   const color = prompt(
//     "Please choose a color for display your message (red/green/blue):"
//   );
//   let displayInfo = document.getElementById("message");

//   let formattedMessage;
//   switch (color) {
//     case "red":
//       formattedMessage = `<h2 style="color: red;">Welcome! Your information has been validated.<br>Name: ===>  ${namee}<br>Phone number: ===> ${phoneNumber}<br>Mobile number: ===> ${mobileNumber}<br>Email: ===> ${email}</h2>`;
//       break;
//     case "green":
//       formattedMessage = `<h2 style="color: green;">Welcome! Your information has been validated.<br>Name: ===>  ${namee}<br>Phone number: ===> ${phoneNumber}<br>Mobile number: ===> ${mobileNumber}<br>Email: ===> ${email}</h2>`;
//       break;
//     case "blue":
//       formattedMessage = `<h2 style="color: blue;">Welcome! Your information has been validated.<br>Name: ===>  ${namee}<br>Phone number: ===> ${phoneNumber}<br>Mobile number: ===> ${mobileNumber}<br>Email: ===> ${email}</h2>`;
//       break;
//     default:
//       alert("Invalid color choice. Please choose either red, green, or blue.");
//       isValid = false;
//       continue;
//   }
//   displayInfo.innerHTML = formattedMessage;
//   break;
// } while (!isValid);

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// Task 3.3

// let userStrReg = /e/g;
// let userStr = prompt("Enter a string");
// let counter = 0;
// counter = (userStr.match(userStrReg) || []).length;
// console.log("The number of letter (e) = " + counter);
// document.getElementById("message").innerHTML = "The number of letter (e) = " + counter;
