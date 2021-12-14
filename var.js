// Creation of variables

// Before ES6 - 2015, we used to create variables thanks to var

var city = "Paris";

// Problems with var

// 1 - we can use a variable before its initialization

console.log(age);
var age = 23;

// 2 - Reassign the same variable

var age = 24;
console.log(age);

// 3 - var is scoped function (portée ou périmètre) !!

//scope global
{
  // scope enfant
  var scopeEnfant = "je suis dans le scope enfant";
}

console.log(scopeEnfant);

var students = [
  { name: "Martial", age: 20 },
  { name: "Julien", age: 20 },
  { name: "Valérie", age: 20 }
];

// we can access from the global scope to the variables declared in the child scope - XX

// if (true) {
//   var counter = 0;
//   students.forEach((s) => {
//     if (s.age >= 18) counter++;
//   });
// }

// console.log(counter);

// same situation with a function

function isMajor() {
  if (true) {
    var counter = 0;
    students.forEach((s) => {
      if (s.age >= 18) counter++;
    });
  }
}

isMajor();
console.log(counter);

// To memorize : scope parent --> scope enfant XX MAIS scope enfant --> scope parent OKOK
