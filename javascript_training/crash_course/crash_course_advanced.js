//Course: Advanced JavaScript Crash Course//

//Scope Review//

//Block Scope//
//Block Scope is a new feature in ES6. It allows you to define variables that are only accessible within a block of code.//

//Global Scope//
//Global Scope is the default scope in JavaScript. It allows you to define variables that are accessible anywhere in your code.//

//Function Scope//
//Function Scope is the scope that is created when you define a function. It allows you to define variables that are only accessible within that function.//

//Nested Scope//
//Nested Scope is when you have a function inside of a function. The inner function has access to the outer function's scope.//

/*
let a = 10;

function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}

outer(); // 10, 20, 30
*/

//JS looks for variables in the following order: local, outer, global// // //Otherwise known as: Lexical Scope//
//So in the above example, it would look for c first, then b, then a//

//Closure//

//Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.//
//Closure is created every time a function is created, at function creation time//

//Example of Closure//

/*
    function outer() {
        let counter = 0;
        function inner() {
        counter++;
        console.log(counter);
    }
    inner(); //returns the inner funcion as well as its scope//
    }

    let fn = outer();
    fn(); // 1
    fn(); // 2
    fn(); // 3
*/

//The fn variable keeps track of the counter variable. It remembers the counter variable and its value//

// // //

//Function Currying//

//Currying is when a function with multiple arguments is converted into a sequence of functions with single arguments//
//Note: Currying does not call a function. It just transforms it//

//Standard Function//

/*
    function sum(a, b, c) {
        return a + b + c;
    }

    console.log(sum(1, 2, 3)); // 6
*/

//Curried Function//

/*
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
*/

//The above function takes one argument and returns a function that takes one argument and returns a function that takes one argument and returns a function that takes one argument and returns the original function//
//Curried functions are useful when you want to create a function that takes multiple arguments but you don't want to call it with all the arguments at once//
//Curried functions are most seen in functional programming//

// // //

//this//

//this is a keyword that is used to reference the object that a function is a property of//
//Allows functions to be reused in different contexts//

//Standard Function//

/*
    function sayMyName(name) {
        console.log(`My name is ${name}`);
    }

    sayMyName("John"); // My name is John
*/

//this function//
//this.name can also be understood as person.name or whatever the biding is called//

/*
    const person = {
        name: "John",
        sayMyName: function () {
        console.log(`My name is ${this.name}`);
    },
    };

    person.sayMyName(); // My name is John
    person.sayMyName("Hasan"); // My name is Hasan
*/

//New Binding// // //Constructor Function//

//When a function is invoked with the new keyword, this inside the function is bound to the new object being constructed//
//This is illustrated in the this = {} line//

/*
    function person(name) {
        //this = {};
        this.name = name;
    }

    const john = new person("John");
    const hasan = new person("Hasan");

    console.log(john.name); // John
    console.log(hasan.name); // Hasan
*/

//Default Binding//

//Without a parameter, it will default to the global scope// // //Since name is not defined in the global scope, it will return undefined//

/*
    sayMyName(); // My name is undefined
    sayMyName(); // My name is undefined
*/

//To create a global variable in node you must use globalThis instead of just const or let//
//const or let work in the DOM//

/*
    globalThis.name = "superman";

    function sayName() {
        console.log(`My name is ${this.name}`);
    }

    sayName(); // My name is superman
*/

// // //

//Order of Precedence//

//The order is as follows: new binding, explicit binding, implicit binding, default binding//

// // //

//prototype//

//A prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible//

/*
    function person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    const person1 = new person("John", "Doe");
    const person2 = new person("Jane", "Doe");

    person1.getFullName = function () {
        return `${this.fname} ${this.lname}`;
    };

    console.log(person1.getFullName()); // John Doe
    //console.log(person2.getFullName()); //person2.getFullName is not a function
*/

//getFullName is a property of person1, not person2. It is not a property of the person function. It is a property of the person1 object//
//To make it a property of the person function, we can use the prototype property//

/*
    person.prototype.getFullName = function () {
        return `${this.fname} ${this.lname}`;
    };

    console.log(person2.getFullName()); // Jane Doe
*/

//In the above example, we added a getFullName function to the person prototype. This means that all objects created from the person function will have access to the getFullName function//

//prototypal inheritance//

//Prototypal inheritance is when an object is able to access properties and methods of another object//
//The call method allows us to call a function with a given this value and arguments provided individually// // //The superhero function is calling the person function//
//Object.create creates a new object, using an existing object as the prototype of the newly created object// // //The person prototype is the prototype of the superhero prototype//

/*
    function person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    person.prototype.getFullName = function () {
        return `${this.fname} ${this.lname}`;
    };

    function superhero(fname, lname) {
        person.call(this, fname, lname);
        this.isSuperhero = true;
    }

    superhero.prototype.fightCrime = function () {
        console.log("Fighting crime!");
    };

    superhero.prototype = Object.create(person.prototype);

    superhero.prototype.constructor = superhero;

    const batman = new superhero("Bruce", "Wayne");

    console.log(batman.getFullName()); // Bruce Wayne
*/

// // //

//Classes//

//Classes are a more modern way of creating objects and dealing with inheritance//
//Classes are snytax sugar over the prototype-based OO pattern//
//Classes are similar to constructor functions, but instead of defining methods and properties in the constructor function, we define them in the class body//

//Syntax//

/*
    class person {
        constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
    }
*/

//The constructor method is a special method for creating and initializing an object created within a class//
//getFullName is a method of the person class//
//this is a keyword that is used to reference the object that a function is a property of//

//extends means that the superhero class is inheriting from the person class//
//superhero inherits the fname and lname properties from the person class and adds the isSuperhero property//
//super is a keyword that is used to call functions on an object's parent//

/*
class superhero extends person {
  constructor(fname, lname) {
    super(fname, lname);
    this.isSuperhero = true;
  }

  fightCrime() {
    console.log("Fighting crime!");
  }
}
*/

/*
const person1 = new person("John", "Doe");
console.log(person1.getFullName()); // John Doe

const batman = new superhero("Bruce", "Wayne");
console.log(batman.getFullName()); // Bruce Wayne
fightCrime(); // Fighting crime!
*/

//Iterators//

//Iteration can be difficult in accessing the elements of an array//
//The iterable and iterator protocols allow JavaScript objects to define or customize their iteration behavior//
//An object is iterable if it implements the Symbol.iterator method// // //This method returns an iterator and should not accept any arguments//

//An object is an iterator if it implements the next method//
//This method returns an object with two properties: value and done// // //value is the current iteration value// // //done is a boolean value that indicates whether the iterator is done iterating//

//Strings//

/*
const str = "Hello";
*/

//for//

/*
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
*/

//The above code displays each letter of the string on a new line// // //H e l l o//

//for of//

//for of loops over the values of an iterable object//

/*

const str2 = "Hello";
for (let char of str2) {
  console.log(char);
}
*/

//The above code displays each letter of the string on a new line// // //H e l l o//

//Syntax//

//An object that is not a built-in iterable object is not iterable by default// // //However, we can make it iterable by adding a Symbol.iterator method to the object//

//An example of how to make an object iterable//

/*
const obj = {
  [Symbol.iterator]: function () {
    step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const value of obj) {
  console.log(value);
}
*/

//The above code displays each value of the object on a new line// // //Hello World//

//Generators//

//Generators are functions that can be exited and later re-entered (It efectivly pauses)// // //A special class of functions that make writing iterators easier//

//Syntax//

//A standard function will not stop executing when it reaches the end of the function body//

/*
function normalFunction() {
  console.log("Hello");
  console.log("World");
}

normalFunction(); // Hello World
*/

//The asterisk (*) after the function keyword indicates that the function is a generator//

/*
function* generatorFunction() {
  yield "Hello";
  yield "World";
}
*/

//Note: It does NOT return a value, it yields a value//

//Generator functions return a Generator object// // //The Generator object is returned by the generator function and it conforms to both the iterable and iterator protocols//

//Declare a variable and assign it to the generator function//

/*
const generatorObject = generatorFunction();
*/

//A for of loop can be used to iterate over the generator object//

/*
for (const word of generatorObject) {
  console.log(word);
} // Hello World
*/

//Generator functions are MUCH easier to write than iterators//

// // //
