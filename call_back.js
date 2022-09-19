const printHello = () => {
  console.log("Good afternoon");
};

const executeAfterDelay = (the_function_to_delay, seconds) => {
  // when using setTimeout the seconds have to go first
  setTimeout(seconds, the_function_to_delay);
};

executeAfterDelay(5000, printHello);

// setTimeout(printHello, 3000);
