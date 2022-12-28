//Runtime error testing
console.log("Hello World");

//This will throw an error
/*
function throwError() {
  return notDefinedVariable;
}
throwError();
*/

//This will throw an error but WILL NOT stop the program
console.log(Error("This is an error".toUpperCase()));

console.log("Goodbye World");

//This will also throw an error but WILL not stop the program
/* 
throw new Error("This is an error");
*/
/*
//try catch block
try {
  throw new Error("This is an error");
} catch (e) {
  console.log(e.message);
}

//Handling try catch block
const reasign = "Cannot reasign a const variable";

try {
  reasign = "Still going to try";
} catch (e) {
  console.log(e);
}

if (condition) {
}
*/

//
//
class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
  }
}

// Write function below
const balloonAttack = (player1, player2) => {
  for (let i = 1; i <= 10; i++) {
    player2.balloonCount -= player1.hitsPerMinute;
    player1.balloonCount -= player2.hitsPerMinute;
    player1.status();
    player2.status();
  }
  if (player1.balloonCount > player2.balloonCount) {
    return player1.name;
  } else if (player2.balloonCount > player1.balloonCount) return player2.name;

  return "Tie";
};

const p1 = new Player("p1", 5);
const p2 = new Player("p2", 2);

//Shift Cypher
class shiftCypher {
  constructor(shift) {
    this.shift = shift;
  }
}
