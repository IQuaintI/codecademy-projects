const assert = require("assert");

//describe math.min//
describe("Math", () => {
  describe(".min", () => {
    it("returns the argument with the lowest value", () => {
      assert.equal(Math.min(1, 2), 1);
    });
  });
});

//describe 1 + 1 = 2//
describe("Math", () => {
  describe(".add", () => {
    it("returns the sum of two numbers", () => {
      assert.ok(1 + 1 === 3);
    });
  });
});

//describe console.log//
describe("Console", () => {
  describe(".log", () => {
    it("Logs the input to console", () => {
      assert.ok(console.log(true));
    });
  });
});



