let counter = 0;

const increment = () => {
  // += is used because we +1 and set it to counter
  // if we did 'counter ++' instead it would do 0+1 over and over again

  counter += 1;
  console.log(counter);
};

setInterval(increment, 1000);
