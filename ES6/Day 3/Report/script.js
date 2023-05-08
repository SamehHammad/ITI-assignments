//* 1)
// This method sets the value of the property with the specified key on the target object.
const myOpj = { name: "Sameh", age: 27 };
Reflect.set(myOpj, "name", "Ahmed");
console.log(myOpj.name); // "Ahmed"

//* 2)
// This method deletes the property with the specified key from the target object.
const myObj1 = { name: "Sameh", age: 27 };
Reflect.deleteProperty(myObj1, "name");
console.log(myObj1.name); // undefined

//* 3)
// This method checks if the target object has a property with the specified key.
const obj3 = { name: "Sameh", age: 27 };
const hasName = Reflect.has(obj3, "name");
console.log(hasName); // true

//* 4)
// This method checks if the target object is extensible (i.e., if new properties can be added to it).
const obj4 = { name: "Sameh", age: 27 };
const isExtensible = Reflect.isExtensible(obj4);
console.log(isExtensible); // true

//* 5)
// This method makes the target object non-extensible (i.e., new properties cannot be added to it).
const obj5 = { name: "Sameh", age: 27 };
Reflect.preventExtensions(obj5);
obj5.age = 30; // error: "Cannot add property age, object is not extensible"

//* 6)
// This method returns the value of the property with the specified key on the target object.
const obj6 = { name: "Sameh", age: 27 };
const value = Reflect.get(obj6, "name");
console.log(value); // "Sameh"

//* 7)
// This method defines a new property on the target object with the specified attributes.
const myObj7 = {};
Reflect.defineProperty(myObj7, "name", { value: "Sameh", writable: false });
Reflect.defineProperty(myObj7, "age", { value: 27 });
console.log(myObj7.name); // "Sameh"
console.log(myObj7.age); // 27
myObj7.name = "Jane"; // error: "Cannot assign to read only property 'name'"

//* 8)
// This method creates a new instance of the target object, using the specified constructor function and arguments list.
const args = ["Sameh", 27];
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const obj8 = Reflect.construct(Person, args);
console.log(obj8.name); // "Sameh"
console.log(obj8.age); // 27

//* 9)
// This method calls the target function with the specified this argument and arguments list.
function greet(name) {
  return `Hello ${name}`;
}
const thisArg = null;
const args2 = ["Sameh"];
const result = Reflect.apply(greet, thisArg, args2);
console.log(result); // "Hello, Sameh!"

//* 10)
// This method returns the prototype of the target object.
const obj9 = {};
const proto = { name: "Sameh", age: 27 };
Object.setPrototypeOf(obj9, proto);
const result2 = Reflect.getPrototypeOf(obj9);
console.log(result2); // { name: "Sameh", age: 27 }

//* 11)
// This method sets the prototype of the target object.
const myObj0 = {};
const proto2 = { name: "Sameh", age: 27 };
Reflect.setPrototypeOf(myObj0, proto2);
console.log(myObj0.name);

//* 12)
// This method returns an array of the target object's own property keys.
const myObj2 = { name: "Ahmed", age: 30 };
Object.defineProperty(myObj2, "name", { value: "Sameh" });
myObj2.age = 27;
const keys = Reflect.ownKeys(myObj2);
console.log(keys); // ["name", "age"]
