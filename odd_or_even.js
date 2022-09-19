const odd_or_even = (number) => {
  if (number % 2 == 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
};

// for loop that loops on all numbers until 20
//  and prints out whether the number is even or odd.
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
