const selectC = document.getElementsByTagName("select")[0];
const userNameInput = document.getElementById("name");
const userAgeInput = document.getElementById("age");
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");
const select = document.getElementsByTagName("select")[0];
const spanName = document.getElementById("red-name");
const spanVisitors = document.getElementById("red-visited");
const selectedImg = document.getElementById("wel-img");

let favColor = "";
let visitCounter = 0;

function registerFun() {
  const userName = userNameInput.value;
  const userAge = userAgeInput.value;
  const male = maleInput.checked;
  const female = femaleInput.checked;
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      favColor = select.options[i].value;
    }
  }
  console.log(favColor);
  setCookie("userName", userName, 365);
  setCookie("userAge", userAge, 365);
  setCookie("male", male, 365);
  setCookie("female", female, 365);
  setCookie("color", favColor, 365);
  
  location.assign("index2.html");
 

}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function countVisitors() {
  let visitors = getCookie("visitors");
  if (!visitors) {
    visitors = 1;
  } else {
    visitors = parseInt(visitors) + 1;
  }
  setCookie("visitors", visitors, 365);
spanName.innerHTML = getCookie("userName");
spanName.style.color = getCookie("favColor");
spanVisitors.innerHTML = getCookie("visitors");
spanVisitors.style.color = getCookie("favColor");
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}
if (getCookie("female") === "true") {
  selectedImg.src = "../images/image1.jpg";
} else {
  selectedImg.src = "../images/image1.jpg";
}

window.addEventListener("beforeunload", countVisitors);
