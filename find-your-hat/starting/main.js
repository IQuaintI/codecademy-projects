const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

const clear = require("clear-screen");


//Greetings//
console.log("Welcome to Find Your Hat!");

//Prompt for field size//
//  const fieldSize = prompt("Please enter the size of the field: ");

class Field {
  constructor(field) {
    this.field = field;
  }

  //Print the field//
  print() {
    for (let i = 0; i < this.field.length; i++) {
      console.log(this.field[i].join(""));
    }
  }

  // Pick a dirction to move//
  move() {
    const direction = prompt("Which direction would you like to move? ");
    if (direction === "") {
      this.y--;
    } else if (direction === "d") {
      this.y++;
    } else if (direction === "l") {
      this.x--;
    } else if (direction === "r") {
      this.x++;
    } else {
      console.log("Please enter a valid direction (u , d , l , r).");
    }
  }
}
