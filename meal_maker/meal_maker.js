const menu = {
  _meal: "",
  set meal(mealToCheck) {
    if (typeof mealToCheck == "string") {
      this._meal = mealToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price === true) {
      return "Today's special is the ribs for $10!";
    } else {
      return "Meal or price not set correctly!";
    }
  },
  _price: 0,
  set price(priceToCheck) {
    if (typeof priceToCheck == "number") {
      this._price = priceToCheck;
    }
  },
};

menu._meal = "Food";
menu._price = 12;
console.log(menu._meal);
console.log(menu._price);
console.log(menu.todaysSpecial);

/* const personSetter = {

  _age: 40,
  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("You must asign a number to age");
    }
  },
};

console.log(personSetter);

personSetter.age = 20;
console.log(personSetter._age);
*/

/* const person = {
  _firstName: "John",
  _lastName: "Doe",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing first or last name";
    }
  },
};

console.log(person);
person.fullName;
console.log(person.fullName);
console.log(typeof person.fullName);
*/
