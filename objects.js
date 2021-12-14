"use strict";
// Objects

// key (or properties) - value pairs
const psg = {
  staff: 30,
  budget: 500000000,
  players: ["Mbappe", "Messi", "Neymar", "Icardi"],
  stadium: "Parc des princes",
  //   devise: function () {
  //     console.log("ICI, c'est PARIS");
  //   }

  //short-hand properties
  devise() {
    console.log("ICI, c'est PARIS");
  }
};

// Reading on objects
const players = psg.players;
console.log(players);

// Setters - Modify the value of a key
psg.players.push("Griezzman");

// Setters - Add a key
psg.trainer = "Pochennito";

// When a property owns a function, we call it a method
psg.devise();

// for ... let ... in
for (let key in psg) {
  console.log("Clef : ", key);
  console.log("Clef key introuvable :", psg.key); // read the key property on the psg object

  console.log("Clef trouvé dynamiquement :", psg[key]);
}

// Get all of the keys in one place
const keys = Object.keys(psg);
console.log(keys);

// Get all of the values of the keys in one place
const values = Object.values(psg);
console.log(values);

// Freeze an object
// Object.freeze(psg);
// psg.julien = "Julien";

// destucturing - ES6

function infos(club) {
  //   const budget = club.budget;
  //   const stadium = club.stadium;
  //   const players = club.players;
  //   const trainer = club.trainer;

  // create a variable named budget and its value = the property of budget inside the club object

  //   const { budget } = club;
  //   const { stadium } = club;
  //   const { players } = club;
  //   const { trainer } = club;

  // Creation of 4 variables and each of their values correpond to the value of the correspondig property inside of the club object
  const { budget, stadium, players, trainer } = club;

  return `
    Budget du club: ${budget}
    Stade du club : ${stadium}
    Joueurs du club : ${players}
    Entraîneur du club : ${trainer}
  `;
}

function infos1({ budget, stadium, players, trainer }) {
  return `
    Budget du club: ${budget}
    Stade du club : ${stadium}
    Joueurs du club : ${players}
    Entraîneur du club : ${trainer}
  `;
}

const infos2 = ({ budget, stadium, players, trainer }) => `
    Budget du club: ${budget}
    Stade du club : ${stadium}
    Joueurs du club : ${players}
    Entraîneur du club : ${trainer}
  `;

console.log(infos2(psg));
