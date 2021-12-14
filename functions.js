// Functions

// Regular functions

// const a = 2;
// const b = 3;
// const a1 = 3;
// const a2 = 0;

// console.log(a * b);
// console.log(a1 * a2);

// or ...

// function definition
function sum(a, b) {
  return a + b;
}

// call to function
console.log(sum(2, 3));

// we can register the return value of the fn
const resultat = sum(2, 3);
console.log(resultat);

const tab = [1, 2, 3];
//tab.forEach((el) => console.log(el));

// nothing is executed after the return statement

function multiply(a, b) {
  return a * b;
  //   console.log(a);
  //   console.log(b);
}

console.log(multiply(1, 2));

// values by default

function greeting(name = "collègue") {
  console.log(`Bienvenue à toi cher ${name}`);
  return name;
}
console.log("L46 : ", greeting());
console.log("L47 : ", greeting("Julien"));

// why undefined in our functions?

function divide(a, b) {
  console.log(a);
  console.log(b);
  return a / b;
}

// 1 - when the parameters are not sent
divide(2);

// 2 - when nothing is returned from the function
function minus(a, b) {
  const resultat = a - b;
}
console.log("L61 : ", minus(2, 3));

// Arrow functions - ES6

// function sum(a, b) {
//   return a + b;
// }

const sum1 = (a, b) => {
  return a + b;
};

console.log(sum1(4, 5));

// Benefits

// 1 - one argument --> no parentheseis needed
function greeting(name = "collègue") {
  console.log(`Bienvenue à toi cher ${name}`);
}

// to an arrow function
const greeting1 = (name) => {
  console.log(`Bienvenue à toi cher ${name}`);
};

// 2 - one statement --> curly braces not needed

const greeting2 = (name) => console.log(`Bienvenue à toi cher ${name}`);

// 3 - one statement --> implicit return

const sum2 = (a, b) => a + b;
console.log(sum2(2, 3));
