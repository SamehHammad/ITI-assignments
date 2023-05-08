// Define Shape constructor as abstract class
function Shape() {
  if (new.target === Shape) {
    throw new Error("Shape is an abstract class and cannot be instantiated.");
  }
}

// Define Rectangle constructor that inherits from Shape
function Rectangle(width, height) {
  Shape.call(this);
  var _width = width;
  var _height = height;
  Object.defineProperties(this, {
    width: {
      get: function () {
        return _width;
      },
      set: function (value) {
        throw new Error("Cannot modify width of rectangle.");
      },
      enumerable: true,
      configurable: false,
    },
    height: {
      get: function () {
        return _height;
      },
      set: function (value) {
        throw new Error("Cannot modify height of rectangle.");
      },
      enumerable: true,
      configurable: false,
    },
    area: {
      get: function () {
        return _width * _height;
      },
      set: function (value) {
        throw new Error("Cannot modify area of rectangle.");
      },
      enumerable: true,
      configurable: false,
    },
    perimeter: {
      get: function () {
        return 2 * (_width + _height);
      },
      set: function (value) {
        throw new Error("Cannot modify perimeter of rectangle.");
      },
      enumerable: true,
      configurable: false,
    },
  });
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Define Square constructor that inherits from Rectangle
function Square(side) {
  if (Square.count > 0) {
    throw new Error("Only one square can be created.");
  }
  Rectangle.call(this, side, side);
  Square.count++;
}

Square.count = 0;

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

// Implement valueOf method for Rectangle
Rectangle.prototype.valueOf = function () {
  return this.area;
};

// Define displayInfo method for both Rectangle and Square
Rectangle.prototype.toString = function () {
  return `// Rectangle => Width: ${this.width}, Height: ${this.height}, Area: ${this.area}, Perimeter: ${this.perimeter}`;
};

Square.prototype.toString = function () {
  return `// Square => Side: ${this.width}, Area: ${this.area}, Perimeter: ${this.perimeter}`;
};

//test the task in console

//* Create a rectangle and a square

var rect = new Rectangle(10, 6);

var square = new Square(5);

// var square2 = new Square(5); //* Error Only one square can be created

//* Display info for rectangle and square
console.log(rect.toString());
console.log(square.toString());

// Create another rectangle and display its area
var rect2 = new Rectangle(7, 5);
console.log("ValueOf area for rect2 = " + rect2.valueOf());

// Test valueOf method for Rectangle area3 + area4
var rect3 = new Rectangle(4, 8);
var rect4 = new Rectangle(9, 3);
console.log(`ValueOf Submition area = ${rect3 + rect4}`); //!32 + 27 =59
console.log(`ValueOf Subtract area  = ${rect3 - rect4}`); //!32 - 27 = 5
