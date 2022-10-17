let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// 3. generates the secret target number, a random int 0-9.
const generateTarget = () => Math.floor(Math.random() * 10);
console.log(generateTarget());
// 7a. returns the distance between 2 numbers.
const getAbsoluteDistance = (a, b) => Math.abs(a - b);
console.log(getAbsoluteDistance(5, 2));
// 4. returns true if user is closer to target, or tie; returns false if computer is closer to target. alerts if guess is out of range.
const compareGuesses = (humansGuess, computersGuess, targetNum) => {
  if (humansGuess < 0 || humansGuess > 9) {
    window.alert(
      "You've lost for being a smartass! Next time, stay in the safe zone of 0 through 9!"
    );
  } else if (
    getAbsoluteDistance(humansGuess, targetNum) <=
    getAbsoluteDistance(computersGuess, targetNum)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(compareGuesses(4));

// 5. announces winner and updates score.
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};
