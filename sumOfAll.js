/*
Given a nested object with numbers at random places,
Write a function to find the sum of all numbers inside it.

Example:
const data = { a: 2, b: { c: 3, d: { e: 4 } }, f: 5 };

Output: 2 + 3 + 4 + 5 = 14
*/

const data = { a: 2, b: { c: 3, d: { e: 4 } }, f: 5 };

const sumNumbers = (obj) => {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += sumNumbers(obj[key]);
    } else {
      sum += obj[key];
    }
  }

  return sum;
};

console.log(sumNumbers(data)); // 14
