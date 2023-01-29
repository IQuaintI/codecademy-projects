//Course: Introduction to Programming with JavaScript//

//Introduction//

//Javascipt is a high-level just-in-time compiled language that adheres to ECMAScript standards//
//High-level means it is easy to read and write//
//Just-in-time compiled means it is compiled as it is run and not before//
//ECMAScript standard means that JS will run along any browser//
//JS, HTML, and CSS are the three main languages of the web//
//JS can also be used to build server-side applications with Node.js//
//JS can also be used to create mobile applications and desktop applications with Electron//

//Javacsript can be run directly in the browser console or in the HTML file itself//
//The best way to run JS is to use its own JS file//

console.log("Hello World");
console.log(123);

//Variables//

//Variables are used to store data//
//Variables can be declared with the var, let, or const keyword// // //However, the let and const keywords are preferred//

//The let method//
//The quotation marks turn the variable into a string//
/*
    let age = 12;
    console.log("age"); //prints 'age'// 
    console.log(age); //prints 12//
*/

//The const method//
/*
    const firstName = "John";
    console.log(firstName); //prints "John"//
*/

//The below causes an error because const variables need to be initialized//
/*
    const lastName
*/

//Const variables cannot be reassigned//
/*
    const number = 12;
    console.log(number); //prints 12//

    number = 13; 
*/

//Let variables can be reassigned//
/*
    let number = 12;
    console.log(number); //prints 12//

    number = 13;
    console.log(number); //prints 13//
*/

//A good rule of thumb is to use const by default and let when you need to reassign a variable// //Var is deprecated and should not be used//

// // //

//Data Types//

//There are 7 primitive types of data in JS and 1 non-primative type//

//Primitive Types//
//String//
//Number//
//Boolean//
//Undefined//
//Undefined//
//BigInt//
//Symbol//

//Non-primative Types//
//Object//

//Strings//

//Strings are used to represent text and are wrapped in quotation marks//

//Quotation marks can be single, double, or backtick//
/*    
    let firstName = "John";
    let lastName = "Doe";
    let fullName = `John Doe`;
    console.log(firstName, lastName, fullName); //prints "John Doe John Doe"//
*/

//Numbers//

//Numbers are used to represent numbers//

//Numbers can be integers or floating point numbers// // //Integers are whole numbers and floating point numbers are numbers with decimals//

/*
    const integer = 12;
    const float = 12.34;

    console.log(integer, float); //prints 12 12.34//
*/

//Booleans//

//Booleans are used to represent true or false//

/*
    const isTrue = true;
    const isFalse = false;

    console.log(isTrue, isFalse); //prints true false//
*/

//Undefined//

//Undefined is used to represent a variable that has not been assigned a value//

/*
    let age;
    console.log(age); //prints undefined//

    let undefined = undefined;
    console.log(undefined); //prints undefined//
*/

//Null//

//Null is used to represent a variable that has been assigned a value of nothing// // //Null is MEANT to be empty while undefined is NOT MEANT to be empty//

/*
    let age = null;
    console.log(age); //prints null//
*/

//BigInt is used to represent integers that are larger than 2^53-1//
//Symbol is used to represent a unique identifier//
//Note: BigInt and Symbol are not needed for entry level JS//

//Objects//

//Non-primative types are used to represent a collection of values//
//Objects are used to represent a single entity with key-value pairs//
//Keys can be strings or symbols and values can be any data type//

/*
    let person = {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    isAdult: false,
    };
    console.log(person); //prints {firstName: "John", lastName: "Doe", age: 12, isAdult: false}//
*/

//The above syntax is an object literal//
//Note: If the key is a vaild JS name (such as there is no space or special characters), the key can be accessed without quotation marks// // //Prettier is designed to auto-format the quotations//

//The below syntax is an array literal//

/*
    const oddNumbers = [1, 3, 5, 7, 9];
    console.log(oddNumbers[2]); //prints 5//
    console.log(oddNumbers); //prints [1, 3, 5, 7, 9]//
*/
//Individual values in an array are called elements// // //Arrays are zero-indexed and can be accessed via brackets//
//Note: The data types of an array do not need to be declared//

/*
    let a = 11;
    a = "Hello";
    a = true;
    console.log(a); //prints true//
*/

//The above is an example of dynamic typing// // //Dynamic typing means that the data type of a variable can change//
//Prints the last value of a//

// // //

//Operators//

//Operators are used to perform operations on variables and values//

//The operators are as follows//
//Assignment Operators//
//Arithmetic Operators//
//Comparison Operators//
//Logical Operators//
//String Operators//
//Other Operators//

//Assignment Operators//

//Assignment operators are used to assign values to variables//

/*
    let a = 12;
    console.log(a); //prints 12//
*/

//The equal sign being used here is an assignment operator//

//Arithmetic Operators//

//Arithmetic operators are used to perform arithmetic operations//

/*
    let a = 2;
    let b = 2;
    console.log(a + b); //prints 4//
    console.log(a - b); //prints 0//
    console.log(a * b); //prints 4//
    console.log(a / b); //prints 1//
    console.log(a % b); //prints 0//
*/

//The above as used are: addition, subtraction, multiplication, division, and modulus//
//Modulus is used to find the remainder of a division (How much is left over so since 2 and 2 divide evenly there is zero left over)//

/*
    let a = 3;
    let b = 2;
    console.log(a % b); //prints 1//
*/

//The above is an example of the modulus operator// // //2 goes into 3 once with a remainder of 1//

//++ and -- are used to increment and decrement a variable by 1//

/*
    let a = 2;
    console.log(++a); //prints 3//
    console.log(--a); //prints 2//
*/

//The number a goes up by one to 3 and then goes down by one to 2//

//Comparison Operators//

//Comparison operators are used to compare two values//

/*
    let a = 2;
    let b = 2;
    console.log(a == b); //prints true//
    console.log(a === b); //prints true//
    console.log(a != b); //prints false//
    console.log(a > b); //prints false//
    console.log(a < b); //prints false//
    console.log(a >= b); //prints true//
    console.log(a <= b); //prints true//
*/

//Double equals (==) is used to check if two values are equal//
//Triple equals (===) is used to check if two values are equal and of the same data type// // //If both values are numbers this would be true, but one value is a string and the other is a number this would be false//
//Exclamation point equals (!=) is used to check if two values are not equal//
//Greater than (>) is used to check if the value on the left is greater than the value on the right//
//Less than (<) is used to check if the value on the left is less than the value on the right//
//Greater than or equal to (>=) is used to check if the value on the left is greater than or equal to the value on the right//
//Less than or equal to (<=) is used to check if the value on the left is less than or equal to the value on the right//

//Logical Operators//

//Logical operators are used to combine conditional statements//

//Double ampersand (&&) is used to check if both values are true// // //If one value is true and the other is false, this will return false//
//Double pipe (||) is used to check if either value is true// // //If one value is true and the other is false, this will return true//

/*
    let a = 2;
    let b = 2;
    let c = 3;
    console.log(a == b && a == c); //prints false// // //Both values are not equal to 3//
    console.log(a == b || a == c); //prints true// // //One value is equal to 2//
*/

//String Operators//

//String operators are used to concatenate (put together) strings//

//The '+' operator is used to concatenate (put togethor) strings//
/*
    console.log('bruce ' + 'wayne'); //print0s bruce wayne//
*/

//Other Operators//

//Ternary operator is used to assign a value to a variable based on a condition//

/*
    let a = 2;
    let b = 2;
    let c = a == b ? "Yes" : "No";
    console.log(c); //prints Yes//

    const isEven = 10 % 2 === 0 ? "Yes" : "No";
    console.log(isEven); //prints Yes//
*/

//The above reads: if a is equal to b, then c is Yes, otherwise c is No//
//The above reads: if 10 divided by 2 has a remainder of 0, then isEven is Yes, otherwise isEven is No//

// // //

//Type Conversion//

//Type conversion is the process of converting a value from one data type to another//

//Implicit conversion also known as coercion is the automatic conversion of a value from one data type to another//

//Explicit conversion is the conversion of a value from one data type to another that is done by the programmer//

//Implicit conversion//

//When a value is added to a string, the value is converted to a string and concatenated to the string//
/*
    let a = 2;
    let b = "2";
    console.log(a + b); //prints 22//
*/

//When any other operator is used, the value is converted to a number//

/*
    let a = 2;
    let b = "2";
    console.log(a - b); //prints 0//
    console.log(a * b); //prints 4//
    console.log(a / b); //prints 1//
    console.log(a % b); //prints 0//
*/

/*
    console.log('bruce' - 'wayne'); //prints NaN//
*/

//The above functions the same as if the values were numbers//
//Note: If a string is not a number, it will return NaN (Not a Number)//

//If boolean values are used, they will be converted to numbers// // //true is 1 and false is 0//

/*
    let a = 2;
    let b = true;
    console.log(a + b); //prints 3//

    let c = false;
    console.log(a + c); //prints 2//
*/

//Null is treated as a 0//

/*
    let a = 2;
    let b = null;
    console.log(a + b); //prints 2//
*/

//undefined is treated as a NaN//

/*
    console.log(undefined + 2); //prints NaN//
*/

//Built-in Methods// // //Explicit conversion//

/*
    console.log(Number("2")); //prints 2//
    console.log(Number("bruce")); //prints NaN//
    console.log(Number(true)); //prints 1//
    console.log(Number(false)); //prints 0// 
    console.log(Number(null)); //prints 0//
    console.log(Number(undefined)); //prints NaN//

    console.log(parseInt("2")); //prints 2//
    console.log(parseInt("bruce")); //prints NaN//
    console.log(parseInt(true)); //prints NaN//
    console.log(parseInt(false)); //prints NaN//

    console.log(parseFloat("2.5")); //prints 2.5//
    console.log(parseFloat("bruce")); //prints NaN//
    console.log(parseFloat(true)); //prints NaN//
    console.log(parseFloat(false)); //prints NaN//

    console.log(String(2)); //prints 2//
    console.log(String(true)); //prints true//
    console.log(String(false)); //prints false//
    console.log(String(null)); //prints null//
    console.log(String(undefined)); //prints undefined//

    console.log(Boolean(2)); //prints true//
    console.log(Boolean("2")); //prints true//
    console.log(Boolean(0)); //prints false//
    console.log(Boolean("")); //prints false//
    console.log(Boolean(null)); //prints false//
    console.log(Boolean(undefined)); //prints false//

    console.log(500..toString()); //prints 500//
    console.log((500).toString()); //prints 500//
*/

// // //

//Equality//

//Equality is the process of comparing two values to see if they are equal//

//Strict equality (===) is the process of comparing two values to see if they are equal and of the same data type//
//Weak equality (==) is the process of comparing two values to see if they are equal, but not of the same data type//

/*
    console.log(2 === 2); //prints true//
    console.log(2 === "2"); //prints false//

    console.log(2 == 2); //prints true//
    console.log(2 == "2"); //prints true//

    console.log(false == '') //prints true//
    console.log(false === '') //prints false//
*/

// Strict equality is more accurate than weak equality and a safre bet to use as a beginner//

// // //

//Conditional Statements//

//Conditional statements are used to perform different actions based on different conditions//

//If statement//

//If statement is used to execute a block of code if a specified condition is true//

/*
    let a = 2;
    let b = 2;
    if (a == b) {
        console.log("Yes");
    }
    //prints Yes//
*/

//else statement//

//else statement is used to execute a block of code if the condition is false//

/*
    let a = 2;
    let b = 3;
    if (a == b) {
        console.log("Yes");
    }
    else {  
        console.log("No");
    }
    //prints No//
*/

//The above states that if a is equal to b, then print Yes, otherwise print No// // //Since a is not equal to b, the else statement is executed//

//else if statement//

//If there are more than two conditions, use else if statement//

/*
    let a = 2;
    let b = 3;
    if (a == b) {
        console.log("Yes");
    }
    else if (a > b) {
        console.log("No");
    }
    else {
        console.log("Maybe");
    }
    //prints Maybe//
*/

//The above states that if a is equal to b, then print Yes, otherwise if a is greater than b, then print No, otherwise print Maybe// // //Since a is not equal to b nor is a larger than b, the else if statement is executed//

//Switch statement//

//Switch statement is used to perform different actions based on different conditions// // //Better than if else statements when it comes down to larger code for readability//

//The syntax of a switch statement is as follows//

/* 
    switch(expression) {
        case x:
            //code block//
            break;
        case y:
            //code block//
            break;
        default:
            //code block//
    }
*/

//break is used to stop the code from running once it hits the condition that is true// // //If break is not used, the code will continue to run until it hits a break or everything has been executed//
//Note: The default statement is optional, but it is used as a "false" situation//

//An example below//

/*
    let color = "red";

    switch(color) {
        case "red":
            console.log("Color is red");
            break;
        case "blue":
            console.log("Color is blue");
            break;
        default:
            console.log("Color is not red or blue");
            break;
    }
    //prints Color is red//
*/

// // //

//Loops//

//Loops are used to execute a block of code a number of times//

//For loop//

//For loop is used to execute a block of code a number of times//

//Initializer: is executed before the loop starts (one time only)//
//Condition: defines the condition for running the loop (loop will continue to run as long as the condition is true)//
//Final-expression: is executed each time after the loop has been executed//

/*
    for (initializer; condition; final-expression) {
        //code block to be executed//
    }

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    //prints 0, 1, 2, 3, 4, 5, 6, 7, 8, 9//
*/

//Note: The loop ends on the number prior to the condition unless (<=) is used to include the ending condition//

//While loop//

//While loop is used to execute a block of code as long as a specified condition is true//

//A key difference between a while loop and a for loop is that the condition is checked before every loop// // //The initial value is set outside the loop//

/*
    while (condition) {
        //code block to be executed//

        final expression;
    }

    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
    //prints 0, 1, 2, 3, 4, 5, 6, 7, 8, 9//
*/

//Do while loop//

//A key difference is that a do while loop is executed at least once, even if the condition is false//

/*
    initializer;
    do {
        //code block to be executed//

        final expression;
    }
    while (condition);

    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 10);
    //prints 0, 1, 2, 3, 4, 5, 6, 7, 8, 9//

    let n = 20;
    do {
        console.log(n);
        n++;
    } while (n < 10);
    //prints 20//
*/

//The above prints 20 because the condition is false, but the code is executed once//

//For of loop//

//For of loop is used to loop through an array//

/*
const numArray = [1, 2, 3, 4, 5];

for (let num of numArray) {
  console.log(num);
}
*/

//One of the benefits of using a for of loop is that it is easier to read and understand//
//A variable does not need to be declared as one is created for each iteration//

// // //

//Functions//

//Functions are used to perform a specific task//

//Functions are executed when "something" invokes it (calls it)// // //Functions are reusable and can be used to make a program easier to maintain//

//Function syntax//

/*
    function name(parameter1, parameter2, parameter3) {
        //code to be executed//
    }

    function greet() {
        console.log("Hello");
    }

    greet(); //prints Hello//

    function greet(name) {
        console.log("Hello " + name);
    }

    greet("John"); //prints Hello John//

    function add(num1, num2) {
        console.log(num1 + num2);
    }

    add(2, 3); //prints 5//

*/

//Note: The parameters are optional//
//Note: The function is not executed when it is defined, it is executed when it is called//

//Arrow functions//

//Arrow functions are a shorter way to write functions//

//Arrow function syntax//

/*
    
    const name = (parameter1, parameter2, parameter3) => {
        //code to be executed//
    }

    const greet = () => {
        console.log("Hello");
    }

    greet(); //prints Hello//

    const greet = (name) => {
        console.log("Hello " + name);
    }

    greet("John"); //prints Hello John//

    const add = (num1, num2) => {
        console.log(num1 + num2);
    }

    add(2, 3); //prints 5//
*/

//Note: The return statement is not needed when using arrow functions//

// // //

//Scope//

//Scope is the visibility of variables//

//There are three types of scope: global, function, and block//

//Function scope//

//Variables declared within a function are only visible within that function//

/*
    function myFunction() {
        let carName = "Volvo";
    }

    console.log(carName); //prints undefined//

    function myFunction() {
        let carName = "Volvo";
        console.log(carName); //prints Volvo//
    }
*/

//In the above example, the variable carName is only visible within the function//

//Block scope//

//Variables declared within a block are only visible within that block//

/*
    if (true) {
        let carName = "Volvo";
    }
    
    console.log(carName); //prints undefined//

    if (true) {
        let carName = "Volvo";
        console.log(carName); //prints Volvo//
    }
*/

//In the above example, the variable carName is only visible within the block//

//Global scope//

//Variables declared outside of a function or block are visible everywhere//
//This may cause error so it is better to use local variables//

/*
const carName = "Volvo";

function myFunction() {
  console.log(carName);
}

myFunction(); //prints Volvo//
*/

//In the above example, the variable carName is visible everywhere//
