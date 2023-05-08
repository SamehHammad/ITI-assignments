//* creating Shape construtor:
class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.height * this.width;
  }

  toString() {
    return `Shape: the height is ${this.height}, and the width is ${this.width} `;
  }
}

//* creating rectangle:
class Rect extends Shape {
  constructor(height, width) {
    super(height, width);
  }
  toString() {
    return `Rectangle: the height is ${this.height}, and the width is ${this.width} `;
  }
}

//*creating square:
class Square extends Shape {
  constructor(side) {
    super(side, side);
    this.side = side;
  }
  toString() {
    return `Square: the side is: ${this.side}`;
  }
}

//* creating cir:
class Circle extends Shape {
  constructor(rad) {
    super(rad, rad);
    this.rad = rad;
  }

  get area() {
    return Math.PI * this.rad ** 2;
  }
  toString() {
    return `Circle: the side is: ${this.rad} and area: ${this.area.toFixed(2)}`;
  }
}

//? creating objects:

//* drawing canvas:
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function drwing(shape, ctx) {
  switch (shape.constructor.name) {
    case "Rect":
      ctx.fillStyle = "black";
      ctx.fillRect(0, 25, shape.width, shape.height);
      break;

    case "Square":
      ctx.fillStyle = "red";
      ctx.fillRect(210, 30, shape.width, shape.height);
      break;

    case "Circle":
      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(350, 75, shape.rad, shape.rad, 0, 2 * Math.PI);
      ctx.fill();
      break;
  }
}

//* Create opjects
const rectOpj = new Rect(100, 180);

const sqOpj = new Square(80);

const cirOpj = new Circle(40);

//*drawing the shapes
drwing(rectOpj, ctx);
drwing(sqOpj, ctx);
drwing(cirOpj, ctx);
