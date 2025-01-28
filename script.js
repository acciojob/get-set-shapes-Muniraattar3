class Rectangle {
  constructor(width, height) {
    this._width = width; // Private property for width
    this._height = height; // Private property for height
  }

  get width() {
    return this._width; // Getter for width
  }

  get height() {
    return this._height; // Getter for height
  }

  getArea() {
    return this._width * this._height; // Calculate and return the area
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Call the parent constructor with width and height as side
  }

  getPerimeter() {
    return 4 * this.width; // Calculate and return the perimeter
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
