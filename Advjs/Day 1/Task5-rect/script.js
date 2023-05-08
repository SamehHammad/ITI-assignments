var rect = new Object();
rect = {
  width: 100,
  height: 50,
  getArea: function (width, height) {
    return this.width * this.height;
  },
  getPerimeter: function (width, height) {
    return 2 * (this.width + this.height);
  },
};

function displayInfo() {
  document.write(`<h2>Width is: ${rect.width}</h2>`);
  document.write(`<h2>Height is: ${rect.height}</h2>`);
  document.write(`<h2>The area of the rect is: ${rect.getArea()}</h2>`);
  document.write(
    `<h2>The perimeter of the rect is:${rect.getPerimeter()}</h2>`
  );
}

displayInfo();
