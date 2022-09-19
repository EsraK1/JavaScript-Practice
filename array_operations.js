const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "87647",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

const checkLength = (numbers) => {
  if (numbers.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const correctnums = numbers.filter(checkLength);
console.log(correctnums);

// const filterLongNumbers = () => {

// }
