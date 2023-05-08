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
spanName.innerHTML = getCookie("userName");
spanName.style.color = getCookie("color");
spanVisitors.innerHTML = getCookie("visitors");
spanVisitors.style.color = getCookie("color");
window.addEventListener("beforeunload", countVisitors);

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

  // Check if name and age inputs are empty
  if (userName === "" || userAge === "") {
    throw new Error("Name and age are required");
  }
  // Check if name already exists
  if (hasCookie("userName")) {
    throw new Error("This name already exists");
  }

  // Set cookies for new user
  setCookie("userName", userName, 365);
  setCookie("userAge", userAge, 365);
  setCookie("male", male, 365);
  setCookie("female", female, 365);
  setCookie("color", favColor, 365);
  location.assign("index2.html");
}

function deleteCookie(cName) {
  if (!hasCookie(cName)) {
  throw new Error("please provide both name and value for cookie");
  } else {
    
    document.cookie = cName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

}
function setCookie(cName, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    cName + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function countVisitors() {
  let visitors = getCookie("visitors");
  if (!visitors) {
    visitors = 1;
  } else {
    visitors = parseInt(visitors) + 1;
  }
  setCookie("visitors", visitors, 365);
}

function getCookie(cName) {
  const nameEQ = cName + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}
if (getCookie("female") === "true") {
  selectedImg.src = "./images/image1.jpg";
} else {
  selectedImg.src = "./images/image.jpg";
}
function hasCookie(cName) {
  const cookieValue = getCookie(cName);
  if (cookieValue !== undefined) {
    return true;
  } else {
    return false;
  }
}


function modifyCookie(cName, value, days) {
  if (this.hasCookie(cName)) {
    this.setCookie(cName, value, days);
  }
}
window.addEventListener("beforeunload", countVisitors);

// let selectedCol;

// let nameUser = document.getElementById('name');
// let ageUser = document.getElementById('age');
// let maleUser = document.getElementById('male');
// let femaleUser = document.getElementById('female');
// let outputName1 = document.getElementById('outputName');
// let outputVist1 = document.getElementById('outputVist');
// let selectedImg = document.getElementById('page2Img');

// function setCookie(name, value, days = 0) {
//   let expires = '';
//   if (name == undefined || typeof name !== 'string')
//     throw new Error('name error');
//   else if (value == undefined || typeof value !== 'string')
//     throw new Error('value error');
//   else {
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = '; expires=' + date.toUTCString();
//     document.cookie =
//       name + '=' + encodeURIComponent(value) + expires + '; path=/';
//   }
// }

// function hasCookie(name) {
//   const cookieValue = getCookie(name);
//   if (cookieValue == undefined) return false;
//   return true;

//   // var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
//   // return match ? match[1] : null;
// }

// function registerFun(col) {
//   let selectedUser = document.getElementsByTagName('select')[0];
//   console.log(col);
//   for (let i = 0; i < selectedUser.options.length; i++) {
//     if (selectedUser.options[i].selected) {
//       selectedCol = selectedUser.options[i].value;
//     }
//   }
//   console.log(selectedCol);

//   const userName = nameUser.value;
//   const userAge = ageUser.value;
//   const male = maleUser.checked;
//   const female = femaleUser.checked;

//   //if (!hasCookie(userName)) throw new Error('Error');
//   //if (!userName || !userAge)
//   //throw new Error('Name or age is required for setCookie function');

//   setCookie('userName', userName, 365);
//   setCookie('userAge', userAge, 365);
//   setCookie('male', male, 365);
//   setCookie('female', female, 365);
//   setCookie('color', selectedCol, 365);

//   location.assign('index2.html');

//   if (getCookie('male') !== 'true' && getCookie('female') !== 'true')
//     throw new Error('Please select a picture');

//   if (!selectedCol) throw new Error('Please select a color');
// }

// function countVisitors() {
//   let visitors = getCookie('visitors');
//   if (!visitors) {
//     visitors = 1;
//   } else {
//     visitors = parseInt(visitors) + 1;
//   }
//   //setCookie('visitors', visitors, 365);
// }

// countVisitors();

// function getCookie(name) {
//   if (!name) {
//     throw new Error('Name and age are required for getCookie function');
//   }

//   const nameEQ = name + '=';
//   const ca = document.cookie.split(';');
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) === ' ') c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) === 0)
//       return decodeURIComponent(c.substring(nameEQ.length, c.length));
//   }
//   return null;
// }

// outputName1.innerHTML = getCookie('userName');
// outputName1.style.color = getCookie('color');
// outputVist1.innerHTML = getCookie('visitors');
// outputVist1.style.color = getCookie('color');

// if (getCookie('female') === 'true') selectedImg.src = '2.jpg';
// else selectedImg.src = '1.jpg';

// //delete:
// // function deleteCookie(name) {
// // const cookieValue = getCookie(name);
// // if (cookieValue == undefined ) throw new Error ("undefined");
// //
// //else document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;
// //
// // }
