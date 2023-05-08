function validateForm() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let errMsg = document.getElementById("validation");
  const nameeRegex = /^[a-zA-Z]/;
  const phoneNumberRegex = /^\d{8}$/;
  const mobileNumberRegex = /(010|011|012)[0-9]{8}/;
  const emailRegex = /[\w]+[@]+[\w]+[.]+[a-zA-Z]/;

  if (!nameeRegex.test(name)) {
    errMsg.style.display = "block";
    errMsg.innerHTML = "Enter a valid name";
    return false;
  }
  if (!phoneNumberRegex.test(phone)) {
    errMsg.style.display = "block";
    errMsg.innerHTML = "Please enter a valid phone numbers (8)numbers";
    return false;
  }
  if (!mobileNumberRegex.test(mobile)) {
    errMsg.style.display = "block";
    errMsg.innerHTML =
      "Please enter a valid mobile number";
    return false;
  }
  if (!emailRegex.test(email)) {
    errMsg.style.display = "block";
    errMsg.innerHTML = "Please enter a valid email address";
    return false;
  }
}
let locat = location.search.substring(1, location.search.length);
let data = locat.split("&");
let associativeArr = [];
console.log(data);
for (let i = 0; i < data.length; i++) {
  var arr = data[i].split("=");
  var key = arr[0];
  var val = arr[1];
  associativeArr[key] = val;
  console.log(associativeArr[key]);
}
let name1 = document.getElementById("name1");
let phone1 = document.getElementById("phone1");
let mobile1 = document.getElementById("mobile1");
let email1 = document.getElementById("email1");
name1.innerHTML = associativeArr["name"] ;
phone1.innerHTML = associativeArr["phone"];
mobile1.innerHTML = associativeArr["mobile"];
email1.innerHTML = associativeArr["email"].replace(
  "%40",
  "@"
);

