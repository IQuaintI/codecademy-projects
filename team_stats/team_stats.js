const team = {
  //Players
  _players: [
    { firstName: "Tim", lastName: "Berd", age: 20 },
    { firstName: "Tom", lastName: "Berd", age: 18 },
    { firstName: "Toby", lastName: "Berd", age: 24 },
  ],

  //Games
  _games: [
    {
      opponents: "bossOne",
      teamPoints: 3,
      opponentsPoints: 2,
    },
    {
      opponents: "bossTwo",
      teamPoints: 1,
      opponentsPoints: 1,
    },
    {
      opponents: "bossThree",
      teamPoints: 4,
      opponentsPoints: 1,
    },
  ],

  //Getters for Players
  get players() {
    return this._players;
  },

  //Getters for Games
  get games() {
    return this._games;
  },

  //Added new players
  addPlayers: function (FirstName, LastName, Age) {
    const newPlayer = {
      FirstName,
      LastName,
      Age,
    };
    this._players.push(newPlayer);
  },

  //Add new games
  addGame: function (opponent, teamPoints, opponentsPoints) {
    const newGame = {
      opponent,
      teamPoints,
      opponentsPoints,
    };
  },
};

//Log testing
console.log(team._players);
console.log(team._games);
//Adding new players
team.addPlayers("Mary", "Berd", 9);
console.log(team._players);
//Testing adding new games
team.addGame("bossFOur", 4, 5);
console.log(team._games);

//The earlier attempt entombed below
/*
   _players: {
    player_one: {
      firstName: "Tim",
      lastName: "Berd",
      age: 20,
    },
    player_two: {
      firstName: "Tom",
      lastName: "Berd",
      age: 18,
    },
    player_three: {
      firstName: "Toby",
      lastName: "Berd",
      age: 24,
    },
  },  
  _games: {
    game_one: {
      opponent: "",
      teamPoints: "",
      opponentsPoints: "",
    },
    game_two: {
      opponent: "",
      teamPoints: "",
      opponentsPoints: "",
    },
    game_three: {
      opponent: "",
      teamPoints: "",
      opponentsPoints: "",
    },
  },
};
console.log(team._players);
*/
