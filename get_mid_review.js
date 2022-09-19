// const getmid = (str) => {
//   let length1 = str.length;
//   let middle = Math.floor(length1 / 2);

//   console.log(getmid("Esra".middle));
//   if (length1 % 2 === 0) {
//     // if even
//     return str[middle - 1] + str[middle];
//   } else {
//     // if odd
//     return str[middle];
//   }
// };
// console.log(getmid("esr"));


const getmid = (str) => {
  // let length1 = str.length;
  let middle = Math.floor((str.length) / 2);

  console.log(getmid("Esra".middle));
  if ((str.length) % 2 === 0) {
    // if even
    return str[middle - 1] + str[middle];
  } else {
    // if odd
    return str[middle];
  }
}

console.log(getmid("esr"));
