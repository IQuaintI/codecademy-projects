//Course: Asynchronous JavaScript Crash Course//

//Introduction//

//Javascript is a synchronous, blocking, single-threaded language//

//Synchronous// // //Code is executed top-down in the order it is written//
//Blocking// // //Code is executed in order and cannot be interrupted//
//Single-threaded// // //Code is executed one line at a time//

//Javascript has just one thread called the "main" thread//

/* 
    function a() {
        console.log("a");
    }

    function b() {
        console.log("b");
    }

    a();
    b();

    //This code will log "a" then "b"//
*/

//Web browsers define functions and API's that cannot be completed synchronously//

// // //

//Timeouts & Intervals//

//setTimeout() executes a block of code after a specified amount of time//

/*
    setTimeout(function, milliseconds, param1, param2, ...);

    function greet() {
        console.log("Hello");
    }

    function greet2(name) {
        console.log("Hello " + name);
    }

    setTimeout(greet, 2000); //This will log "Hello" after 2 seconds
    setTimeout(greet2, 2000, "John"); //This will log "Hello John" after 2 seconds
*/

//clearTimeout() stops a timeout//

/*
    let timeout = setTimeout(greet, 2000);

    clearTimeout(timeout); //This will stop the timeout; 

    //This will not log "Hello" after 2 seconds//

*/

//setInterval() executes a block of code repeatedly, after a specified amount of time//
//Note: setIntercal() is not the same as rescursive setTimeout()// // //SetInterval() includes the time taken to execute the code you want to run (If the duration interval is set to 100ms and the code takes 50ms to run, there is only 50ms to the next interval)//

/* 
    setInterval(function, milliseconds, param1, param2, ...);

    setInterval(greet, 2000); //This will log "Hello" every 2 seconds
*/

//clearInterval() stops an interval//

/*
    let interval = setInterval(greet, 2000);
    
    clearInterval(interval); //This will stop the interval

    //This will not log "Hello" every 2 seconds//

*/

//Recursive setTimeout()// // //This is a function that calls itself//
//Note: Recursive timeouts are not garunteed to execute at a specific time// // //The duration interval is guaranteed even if the call stack is busy//

/*
    setTimeout(greet, 2000), 2000); //This will log "Hello" every 2 seconds

*/

//Note: setTimeout() and setInterval() are not part of the Javascript language// // //They are part of the browser's API that is interacted with via Javascript// // //This means that they are not available in Node.js//

//Note: Duration parameter is the minimum time not the garunteed time// // //The code will wait until the minimum time has elapsed before executing// // //If the call stack is busy, the code will wait until the call stack is empty//
//Note: A duration of 0 will execute the code as soon as possible but this does not garuntee an immediate execution//
//Warning: If the code takes longer to execute than the interval itself, then it is better to use a recursive setTimeout()//

// // //

//Callbacks//

//Functions are first-class objects in Javascript// // //This means that functions can be passed as arguments to other functions//
//The function that is passed as an argument is called a callback function// // //A function that accepsts or returns another function is called a higher-order function//

/*
function callbackFunction(name) {
  console.log("Hello " + name);
}

function higherOrderFunction(name) {
  const name = "Ace";
  callbackFunction(name);
}

higherOrderFunction(); //This will log "Hello Ace"

*/

//Synchronous callbacks are callbacks that are executed immediately//
//Asynchronous callbacks are callbacks that can e used to resume code execution after an asynchronous operation has occured// // //These callbacks are executed after the data has been fetched//

//Note: setTimeout() is an asynchronous function// // //This means that the code will not execute until the timer has passed//
//Note: event handlers are asynchronous functions// // //This means that the code will not execute until an event is triggered//
//Warning: Multiple callbacks that rely on each other can be difficult to manage//