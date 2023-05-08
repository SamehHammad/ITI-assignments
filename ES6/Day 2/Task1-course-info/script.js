function courseInfo({
  crsName = "ES6",
  crsDuration = "3 days",
  crsOwner = "JavaScript",
  ...rest
}) {
  for (let prop in rest) {
    if (rest.hasOwnProperty(prop)) {
      throw new Error("Invalid property provided in object");
    }
  }
  console.log(
    `Course Name: ${crsName}, Course Duration: ${crsDuration}, Course Owner: ${crsOwner}`
  );
}

//*test in console

courseInfo({ crsName: "PHP", crsOwner: "Elzero" });
// Course Name: React, Course Duration: 3 days, Course Owner: Facebook

courseInfo({
  crsName: "AdvJs",
  crsDuration: "10 days",
  crsOwner: "ITI",
}); // Course Name: Node.js, Course Duration: 5 days, Course Owner: Google


courseInfo({ crsName: "Angular", crsDuration: "4 days", crsOwner: "Google", price: 100 });
//*throws Error: Invalid properties provided in object
