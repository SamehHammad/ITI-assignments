const userNameInput = document.getElementById("name");
const userAgeInput = document.getElementById("age");
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");
const selectC = document.getElementsByTagName("select")[0];
const spanName = document.getElementById("red-name");
const spanVisitors = document.getElementById("red-visited");
let favColor = getCookie("color");
let visitCounter = 0;
spanName.innerHTML = getCookie("userName");
  spanName.style.color = getCookie("color");
  spanVisitors.innerHTML = getCookie("visitors");
spanVisitors.style.color = getCookie("color");
window.addEventListener("beforeunload", countVisitors);
// for (let i = 0; i < selectC.options.length; i++) {
//   if (selectC.options[i].selected) {
//     favColor = selectC.options[i].value;
//   }
// }
console.log(favColor);

// function setCookie(name, value, days) {
//   let expires = "";
//   if (days) {
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie =
//     name + "=" + encodeURIComponent(value) + expires + "; path=/";
// }

// function registerFun() {
//   const userName = userNameInput.value;
//   const userAge = userAgeInput.value;
//   const male = maleInput.checked;
//   const female = femaleInput.checked;

//   setCookie("userName", userName, 365);
//   setCookie("userAge", userAge, 365);
//   setCookie("male", male, 365);
//   setCookie("female", female, 365);
//   setCookie("color", favColor, 365);

//   location.assign("index2.html");
// }

function countVisitors() {
  let visitors = getCookie("visitors");
  if (!visitors) {
    visitors = 1;
  } else {
    visitors = parseInt(visitors) + 1;
  }
  setCookie("visitors", visitors, 365);
  
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

