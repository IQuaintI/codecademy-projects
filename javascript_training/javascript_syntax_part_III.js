//Classes
//Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JavaScript are introduced in ECMAScript 2015.

//Class declarations
//One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

//Testing the class
const square = new Rectangle(10, 10);
console.log(square);

//Class expressions
//A class expression is another way to define a class. Class expressions
//can be named or unnamed. The name given to a named class expression is local to the class's body. (it can be retrieved through the class's (not an instance's) name property, though).

// unnamed
let Triangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(Triangle.name);

// named
let Triangle2 = class Triangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

const triangle = new Triangle2(10, 10);
console.log(triangle);

//Dog class
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  incrementAge() {
    this.age++;
  }
}

const dog = new Dog("Bingo", 10);
const dog2 = new Dog("Bingo2", 11);
const dog3 = new Dog("Bingo3", 12);
dog.incrementAge(); //Method call on the dog object //11
dog2.incrementAge(); //12 //Method call on the dog2 object
console.log(dog);
console.log(`The dog's name is ${dog.name} and it is ${dog.age} years old.`);
console.log(`The dog's name is ${dog2.name} and it is ${dog2.age} years old.`);
console.log(`The dog's name is ${dog3.name} and it is ${dog3.age} years old.`);

//getters and setters
//Getters and setters are methods that get and set the value of an object's private properties, which helps in controlling the data.

class Dog2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (value < 0) {
      throw new Error("Age must be a positive number");
    }
    this._age = value;
  }
}

//Inheritance
//Inheritance is when a class is based on another class, getting the properties and methods of the parent class. The child class can have its own properties and methods in addition to the parent's properties and methods.

//extends
//The extends keyword is used in class declarations or class expressions to create a class as a child of another class.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog3 extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog4 = new Dog3("Rex");
dog4.speak(); // Rex barks.
console.log(dog4);

//Instance
//An instance is an object that contains the property names and methods of a class, but with unique property values.
const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);

//Static
//Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
