// Fixing errors with const and let

// 1 - can't acces a variable before its initialization

// console.log(age);
// const age = 30; // xx

//const age = 30;
//console.log(age);

// 2 - We can't reassign the same variable

const age = 31; // xx

// 3 - const / let are block scoped

{
  const age = 30;
  console.log(age);
}
console.log(age);

// -------------------------------------------------------- //

// 1 - with const, we can't change the value of the variable
const name = "Nissim";
//name = "Jean";

let ageNissim = 31;
ageNissim = 32;
console.log(ageNissim);

// 2 - we declare all variables with const unless we know by advance that we're gonna change the value, thus we use let

// 3 - be careful with arrays and object

const marks = [10, 12, 14, 9, 19]; // an array is particular object
marks.push(9);
console.log(marks);

const Nissim = {
  age: 31,
  name: "Nissim",
  city: "Paris",
  gender: "M"
};

Nissim.age += 1;
console.log(Nissim.age);
