const my_name = "Esra";
console.log("hi " + my_name);

a = 4;
b = 6;

console.log(a + b);
console.log(a * b);

// const keyword to declare a value as "constant", if we're not planning to change its value later
// It would give error if you try to change the value
const greeting = "Hello ";
const name = "Makers";

console.log(greeting + name);

// Functions
// a function is the same thing as a Ruby "method"
// but it lives on its own, without being attached to a specific object

// the below function take no arguments. Pay attention to the brackets, its empty
const printMessagee = () => {
  console.log("Hi there!");
};

// the below function takes an argument.
const printMessage = (message) => {
  console.log(message);
};

// in JavaScript, we *have* to use `return`, otherwise nothing will be returned.
const getName = () => {
  return "Léo";
};

const welcome = require("./say_Hello");
// welcome('Esra');

console.log(welcome("Esra"));

// Conditionals
// const a = getSomeValue();

// if (a === 10) {
//   // do these things
// } else if (a === 20) {
//   // something else?
// } else {
//   // whatever
// }

const getNumberSign = (number) => {
  if (number === "0") {
    return "zero";
  } else if (number.includes("-")) {
    return "negative";
  } else {
    return "positive";
  }
};
console.log(getNumberSign("1"));

const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidLength("0011223344"));

const fizzbuzz = require("./fizz_buzz.js");

console.log(fizzbuzz(15));

console.log("-------------------");

// For all numbers from 0 to 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// A 'while' loop doing the same thing
let i = 0;

while (i <= 10) {
  console.log(i);

  i += 1;
}
