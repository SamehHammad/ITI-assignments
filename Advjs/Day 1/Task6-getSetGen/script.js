const obj = {
  description: "set and get object",
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
  getSetGen: function () {
    var self = this;
    for (let key in this) {
      if (typeof self[key] !== "function") {
        var capitalizedName = key.charAt(0).toUpperCase() + key.slice(1);
        var getterName = [`get${capitalizedName}`];
        var setterName = [`set${capitalizedName}`];
        (function (propertyName) {
          self[getterName] = function () {
            return self[propertyName];
          };
          self[setterName] = function (value) {
            self[propertyName] = value;
            return self[propertyName];
          };
        })(key);
      }
    }
  },
};
var user = {
  name: "Ali",
  age: 35,
};
obj.getSetGen.call(user);

var myObj = Object.create(obj);
myObj.getSetGen();

//*getId(), setId(), getLocation(), setLocation(), getAddr(), setAddr().

// myObj.setId("SD-28");
// myObj.setLocation("Cairo");
// myObj.setAddr("11-MN");
// user.setName("Sameh");
// user.setAge("27");

//? from opj object:

document.write(`<h2>For my object: ID: => ${myObj.getId()}</h2>`);
document.write(`<h2>From my object: Location: => ${myObj.getLocation()}</h2>`);
document.write(`<h2>From my object: (Address): => ${myObj.getAddr()}</h2>`);

//? from user object:

document.write(`<h2>From user object: (Name) => ${user.getName()}</h2>`);
document.write(`<h2>From user object: (Age) => ${user.getAge()} years</h2> `);
