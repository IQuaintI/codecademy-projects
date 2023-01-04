//Javascript Promises//

//Counting charges//
const charges = {
  murder: 0,
  theft: 2,
  arson: 4,
};

//Resolve, reject//
function chargesCounter(resolve, reject) {
  if (charges.theft > 0) {
    resolve("Act tallied");
  } else {
    reject("Unknown variable");
  }
}

//New promise made//
function countCharges() {
  return new Promise(chargesCounter);
}

//Bind functions
let chargesCount = countCharges();

console.log(chargesCount); //Logs Promise {'Act tallied}

//Timeout function//
function testingTime() {
  console.log("This is a first line");
}

//Timeout testing//
setTimeout(countCharges, 1000);
setTimeout(testingTime, 2000);

//.then() testing//
const inventory = {
  milk: 12,
  egg: 33,
  bread: 90,
};

function inventoryCounter(resolve, reject) {
  if (inventory.milk) {
    resolve("There is milk");
  } else {
    reject("There is no milk");
  }
}

function milkCounter() {
  return new Promise(inventoryCounter)
}
