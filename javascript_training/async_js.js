//What is a promise?//
//A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.//

//Inventory//
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

//Resolve and Reject//
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

//New Promise//
function orderSunglasses() {
  return new Promise(myExecutor);
}

//Order Promise//
const orderPromise = orderSunglasses();

//Log Order Promise//
console.log(orderPromise);

//setTimeout()//
setTimeout(() => {
  console.log("This is the first line code in app.js.");
}, 2000);

//console.log()//
console.log("This is the second line code in app.js.");

//setTimeout()//
setTimeout(() => {
  console.log("This line of code will run last.");
}, 1000);

//function usingSTO()//
function usingSTO() {
  console.log("hello");
}

//setTimeout()//
setTimeout(usingSTO, 1000);

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

//orderPromise.then()//
orderPromise.then(handleSuccess, handleFailure);

//catch()//
//What is catch()?//
//catch() is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax://
//myPromise.catch(error => {
// // do something with the error
//});
orderPromise.catch(handleFailure);







//module.exports//
module.exports = { usingSTO, orderSunglasses, orderPromise };
