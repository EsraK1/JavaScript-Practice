const fizzbuzz = (numero) => {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "Fizzbuzz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return "Fizz";
  }
};

module.exports = fizzbuzz;
