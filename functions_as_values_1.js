// Uppercase
const uppercaseMessage = (message) => {
  return message.toUpperCase();
};

// This function accepts as arguments a string message, and a function.
// It then calls the given function to do its job.
const transform = (message, transformFunction) => {
  return transformFunction(message);
};

console.log(transform("hello", uppercaseMessage));

// lowercase
const lowercaseMessage = (message) => {
  return message.toLowerCase();
};

const change = (message, changeFunction) => {
  return changeFunction(message);
};

console.log(change("WHY ARE YOU SHOUTING?", lowercaseMessage));
