const { checkInventory } = require("./async_js.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

// Write your code below:
function handleSuccess(resolve) {
  console.log(resolve);
}

function handleFailure(reject) {
  console.log(reject);
}

checkInventory(order).then(handleSuccess, handleFailure);
