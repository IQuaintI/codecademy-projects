class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  //Get name
  get name() {
    return this._name;
  }

  //Get level
  get level() {
    return this._level;
  }

  //Get number of students
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  //Method quickFacts
  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
    );
  }

  //Static method pickSubstituteTeacher
  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }

  //Set number of students
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
}

// Primary school class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  //Get pickup policy
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//High school class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  //Get sports teams
  get sportsTeams() {
    return this._sportsTeams;
  }
}

// Primary test
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

console.log(lorraineHansbury);

//Quick facts
lorraineHansbury.quickFacts();

School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

// High test
const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(alSmith.sportsTeams);
