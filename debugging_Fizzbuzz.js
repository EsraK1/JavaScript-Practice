class FizzBuzz {
  play(number) {
    // let otherNumber = number - 50;
    if (this._isDivisibleBy(15, number)) {
      return "FizzBuzz";
    } else if (this._isDivisibleBy(5, number)) {
      return "Buzz";
    } else if (this._isDivisibleBy(3, number)) {
      return "Fizz";
    } else {
      return number;
    }
  }

  _isDivisibleBy(divisor, number) {
    return number % divisor === 0;
  }
}

const fizzBuzz = new FizzBuzz();
// console.log("===================");
// console.log(fizzBuzz.isDivisibleBy(9, 3));

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
