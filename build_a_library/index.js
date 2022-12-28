class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  //get title
  get title() {
    return this._title;
  }

  //get isCheckedOut
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  //get ratings
  get ratings() {
    return this._ratings;
  }

  //toggleCheckOutStatus
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  //getAverageRating
  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    return ratingsSum / this.ratings.length;
  }

  //addRating
  addRating(value) {
    this.ratings.push(value);
  }

  //isCheckedOut
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
}

//Book class
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  //get author
  get author() {
    return this._author;
  }

  //get pages
  get pages() {
    return this._pages;
  }
}

//Movie class
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  //get director
  get director() {
    return this._director;
  }

  //get runTime
  get runTime() {
    return this._runTime;
  }
}

//New book instance
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

//Toggle check out status of historyOfEverything
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

//Add ratings to historyOfEverything
historyOfEverything.addRating(4, 5, 5);

//Call average rating of historyOfEverything
console.log(historyOfEverything.getAverageRating());

//New movie instance
const speed = new Movie("Jan de Bont", "Speed", "116");

//Toggle check out status of speed
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

//Add ratings to speed
speed.addRating(1, 1, 5);

//Call average rating of speed
console.log(speed.getAverageRating());
