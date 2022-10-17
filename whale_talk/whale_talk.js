//Variable declaration
let input = "turpentine and turtles";

//Vowels array
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

//Loop declaration
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === "e") {
        resultArray.push("ee");
      } else if (input[i] === "u") {
        resultArray.push("uu");
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}
