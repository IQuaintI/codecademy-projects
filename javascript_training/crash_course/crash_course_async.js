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

//Promises are used in leiu of callbacks to manage asynchronous code//

// // //

//Promises//

//Promises are objects that represent the eventual completion or failure of an asynchronous operation// // //A proxy fo a value not necessarily known when the promise is created//
//Promises are in one of three states: pending, fulfilled, or rejected// // //A promise is pending when it is waiting for an asynchronous operation to complete// // //A promise is fulfilled when the asynchronous operation has completed successfully// // //A promise is rejected when the asynchronous operation has failed//

//Promises are created using the Promise constructor//
/*
const promise = new Promise(function (resolve, reject) {
  //Promise code goes here
});
*/
/*
const promiseResolve = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hello");
  }, 2000);
});

const promiseReject = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Error");
  }, 2000);
});

//Promises will automatically inject the resolve() parameter and the reject() parameter into the onFulfilled() and onRejected() parameters//

const onFullfilled = (result) => {
  console.log(result);
  console.log("Promise resolved");
};

const onRejected = (error) => {
  console.log(error);
  console.log("Promise rejected");
};

promiseResolve.then(onFullfilled);
promiseReject.catch(onRejected);
*/

// // //

//Promises Part II//

//onRejection() can be called with just a .then() method//

/*  
    promise.then(onFulfilled, onRejected);
*/

//However the .catch() method is preferred// // //This is because the .then() method will only catch errors that occur in the promise itself and not from the callback function// // //The .catch() method will catch errors that occur in the promise and the callback function//

//Promises can be chained together// // //Can be done as often as desired//

/*
    promise.then(onFulfilled).catch(onRejected);
    promise.then(onFulfilled).then(onFulfilled).catch(onRejected);
*/

//Promise.all() is a static method that can be used to execute multiple promises at once// // //If multiple APS's are queried but the actions are dependant on the others being completed, then Promise.all() can be used to execute them all at once//

/*
    const promise1 = Promise.resolve("Hello");
    const promise2 = 10;
    const promise3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000, "Goodbye");
    });

    Promise.all([promise1, promise2, promise3]).then(function (values) {
        console.log(values);
    });
*/

//Note: If any of the promises are rejected, then the .catch() method will be called//

//Promise.allSettled() is similar to Promise.all() but it will not reject if any of the promises are rejected//

//Promise.race() is similar to Promise.all() but it will only resolve when the first promise is resolved//

/*
const promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "Hello");
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "Goodbye");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value);
});

//Promise2 will be resolved first and will be the value that is logged//
*/

// // //

//Async / Await//

//async functions are functions that return a promise//

//async functions that return a value will return a promise that is resolved with that value// // //async functions always return a promise//

/*
async function greet() {
  return "Hello";
}

console.log(greet());

//async functions that do not return a value will return a promise that is resolved with the value undefined (pending)//
async function greet2() {
  return Promise.resolve("Hello");
}

console.log(greet2());

*/

//then() can be used to access the value of the promise rendering it fulfilled//
/*
console.log(
  greet2().then(function (result) {
    console.log(result);
  })
);

console.log(greet2().then((result) => console.log(result))); //This is the same as the above code//
*/

//await can be used to pause the code of an async function until it settles the promiss (returns a result)// / // //await can only be used inside of an async function//

/*
async function greet() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 2000);
  });

  let result = await promise; // wait until the promise resolves //

  console.log(result); // "Hello" //
}

greet();
*/

//There is a 2 second delay before the result is logged and therefore no code is being run until then//
/*
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}
*/

//There is a 1 second delay before the result is logged and therefore no code is being run until then//
/*
function resolveAfter1Second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
}
*/

//SequentialStart is used for one after the other and runs a bit slower than the concurrentStart//
/*
async function sequentialStart() {
  const twoSeconds = await resolveAfter2Seconds();
  console.log(twoSeconds); // Logs after 2 seconds //

  const oneSecond = await resolveAfter1Second();
  console.log(oneSecond); //Logs after 3 seconds due to 2 + 1 //
}
*/

//This code is run at the same time due to the oneSecond beig ready to run before twoSeconds is// // //Fastest way to run the code//
//Both promises are resolved at the same time and therefore the code is run at the same time due to the oneSecond beig ready to run before twoSeconds is// // //The code is run in the order that the promises are resolved//

/*
async function concurrentStart() {
  const twoSeconds = resolveAfter2Seconds();
  const oneSecond = resolveAfter1Second();

  console.log(await twoSeconds);
  console.log(await oneSecond);

}
*/

//Parallel execution is when the code that is completed first is run first//

/*
 function parallel() {
  Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]); // Logs after 2 seconds //
    console.log(messages[1]); // Logs after 1 second //
  });
}
*/

// // //

//Event Loop//

//The JS Runtime Environment is made up of the following: JS Engine (Memory Heap, Call Stack), Web APIs (DOM, AJAX, Timeout), Callback Queue// // //Web APIs are NOT a part of the JS Engine, but rather the web browser that JS can interact with//
//V8 Engine is the JS Engine that is used in Chrome and NodeJS//
//The Event loop is a mechanism that does one thing - It checks to see if the call stack is empty and if it is, it will push the first callback on the queue to the stack to be processed//

//Synchroneous code//

/*
console.log("1");
console.log("2");
console.log("3");
*/

//The global() function is the first function that is called and is pushed to the call stack//
//Then console.log("1") is called and is pushed to the call stack//
//Then the function is popped off the call stack and the next line is executed//
//Then console.log("2") is called and is pushed to the call stack//
//Then the function is popped off the call stack and the next line is executed//
//Then console.log("3") is called and is pushed to the call stack//
//Then the function is popped off the call stack and the next line is executed//
//Then the global() function is popped off the call stack//

//Asynchronous code//
/*
  console.log("1");

  setTimeout(function () {
    console.log("2");
    }, 2000);

  console.log("3");
*/

//The global() function is the first function that is called and is pushed to the call stack//
//Then console.log("1") is called and is pushed to the call stack//
//Then the function is popped off the call stack and the next line is executed//
//Then setTimeout() function is called and is pushed to the call stack//
//Then setTimeout() function is moved from to callstack to the web API//
//Then the timer for setTimeout() is set for 2 seconds in the web API//
//Then console.log("3") is called and is pushed to the call stack//
//Then the function is popped off the call stack//

//Note: The web API cannot push functions on to the call stack, it can only move functions from the call stack to the web API// // //This would be a violation of the single threaded nature of JS as it would cause JS to drop what it is doing and tend to the new function which may cause error//

//After 2 seconds the setTimeout() function is moved from the web API to the callback queue//
//Then the event loop checks to see if the call stack is empty and if there is something in the callback queue//
//The call stack is empty so the event loop pushes the setTimeout() function from the callback queue to the call stack//
//The callback funtion then pulls the referenced function from the call stack and pushes it to the call stack//
//Then console.log("2") is called and is pushed to the call stack//
//Then the function is popped off the call stack and the next line is executed//
//Then the setTimeout() function is popped off the call stack//
//Then the global() function is popped off the call stack//

//Note: If there is a function that has a zero ms timer, it will be pushed onto the web API holding area where it will then be pushed immediately to the callback queue// // //Then the event loop will check to see if the call stack is empty and if there is something in the callback queue as usual and if empty it will push the callback function into the call stack//

//Asynchronous promise code//

//Fetch is a web API that is used to make HTTP requests//

/*
  console.log("1");

  const promise = fetch("https://jsonplaceholder.typicode.com/users");
  promise.then((response) => {
    console.log('The response is', response);
  }
  );

  console.log("3");
*/

//The global() function is the first function that is called and is pushed to the call stack//
//Then console.log("1") is called and is pushed to the call stack//
//Then the function is popped off the call stack and the next line is executed//
//Then fetch() function is called and is pushed to the call stack//
//Then fetch() function is moved from to callstack to the web API// // //Fetch() leaves behind a pending promise in the memory heap//
//Promise.then() is called and is pushed to the call stack//
//Then promise.then() is moved from to callstack to the memory heap as an onFulfillment condition//
//Then console.log("3") is called and is pushed to the call stack//
//Then the function is popped off the call stack//
//Once the data has been fetched from the web API, the promise is resolved and the onFulfillment condition is pushed to the micro task queue//
//Then the event loop checks to see if the call stack is empty and if there is something in the callback queue or micro task queue//
//The call stack is empty so the event loop pushes the promise.then() function from the micro task queue to the call stack//
//The callstack is then logged (The response is Response) and then the promise.then() function is popped off the call stack//
//Then the global() function is popped off the call stack//

//Note: Should the promise be rejected, the onRejection condition would be pushed to the micro task queue instead//

/* 
  setTimeout(function () {
    console.log("1");
    }, 0);

    const promise = fetch("https://jsonplaceholder.typicode.com/users");
    promise.then((response) => {
      console.log('The response is', response);
    } 
    );

    while (let i = 0; i < 1000000000; i++) {
      //Blocks the code for a few seconds//
    }

    console.log("2");
*/

//The global() function is the first function that is called and is pushed to the call stack//
//Then setTimeout() function is called and is pushed to the call stack//
//Then setTimeout() function is moved from to callstack to the web API (Its callback function and its duration)//
//SetTimeout() is then popped off the call stack//
//The web API pushes the setTimeout() function to the callback queue after the duration has passed (Which is immeidiately since it has a 0 second timer)//
//Then fetch() function is called and is pushed to the call stack//
//Then fetch() function is moved from to callstack to the web API// // //Fetch() leaves behind a pending promise in the memory heap//
//Promise.then() is called and is pushed to the onFulfillment on the promise in the memory heap//
//Promise.then() is then popped off the call stack//
//The while loop is called and is pushed to the call stack//
//During the duration of the while loop, the web API fetches the data and the promise is resolved and the onFulfillment condition is pushed to the micro task queue//
//The while loop completes and is popped off the call stack//
//Then console.log("2") is called and is pushed to the call stack//
//JS prioritizes the micro task queue over the callback queue//
//The callback function in the micro task queue is then pushed to the call stack, which then calls the reponse (The response is Response) and then the callback function is popped off the call stack//
//Then the setTimeout() function is pulled out of the callback queue and placed on the stack, then logged//
//Then the setTimeout() function is popped off the call stack//
//Then global() is popped off the call stack//

// // //

/*
async function returnTen() {
  return 10;
}

returnTen().then((number) => {
  console.log(number);
});
*/

//JS Training//

/*


function zero(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("Zero");
    } else {
      reject("Not Zero");
    }
  });
}

zero(1)
  .then((responseValue) => {
    console.log(`The number is ${responseValue}`);
  })
  .catch((error) => {
    console.log(`The number is ${error}`);
  });

//The below is syntactic sugar for the above//

async function zeroTwo(num) {
  if (num === 0) {
    return "Zero";
  } else {
    return "Not Zero";
  }
}

zeroTwo(1)
  .then((responseValue) => {
    console.log(`The number is ${responseValue}`);
  })
  .catch((error) => {
    console.log(`The number is ${error}`);
  });

//Some more await practice//

function myPromise() {
  return Promise.resolve("I have resolved");
}

myPromise().then((response) => console.log(response));

//async does not require a promise to be returned//
async function asyncFunc() {
  return "Hello World";
}

asyncFunc().then((response) => console.log(response));

//Promise function without async...await//
function brainstormColor() {
  return new Promise((resolve, reject) => {
    console.log(`I have to pick a color...`);
    setTimeout(() => {
      console.log(`I have picked a color!`);
      setTimeout(() => {
        console.log(`Wait a second let me think!`);
        setTimeout(() => {
          console.log(`I have thought of a color for real this time!`);
          setTimeout(() => {
            resolve(`Blue!`);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  });
}

brainstormColor()
  .then((color) => {
    console.log(`My color is ${color}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

//Promise function with async...await//
async function asyncBrainstormColor() {
  console.log(`I have to pick a color...`);
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`I have picked a color!`);
      resolve();
    }, 2000);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Wait a second let me think!`);
      resolve();
    }, 2000);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`I have thought of a color for real this time!`);
      resolve();
    }, 2000);
  });
  return "Blue!";
}

*/

//Random number guesser//

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

let num = randomNumber();

console.log(randomNumber());

async function guessNumber() {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Its even!");
    } else {
      reject("Its odd!");
    }
  });
}

guessNumber()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//Await practice//
async function stateAColor() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Blue");
    }, 2000);
  });
}

async function stateBColor() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Red");
    }, 2000);
  });
}

async function stateCColor() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yellow");
    }, 2000);
  });
}

async function colorWheel() {
  let a = await stateAColor();
  let b = await stateBColor();
  let c = await stateCColor();
  console.log(a, b, c);
}

colorWheel();

//All of the above wait for the previous promise to resolve before moving on to the next promise//
//All show at the same time// // //They are concurrent//

//Promise.all()//
//Promise.all() waits for all of the promises to resolve before moving on to the next promise//
//Promise.all() shows in order//
//Promise.all() does not have to wait for all of the promises to resolve to return an error//

async function colorWheelTwo() {
  let a = stateAColor();
  let b = stateBColor();
  let c = stateCColor();
  let colors = await Promise.all([a, b, c]);
  console.log(colors);
}

colorWheelTwo();
