// Find factorial of a number
// Base Case n == 0 || n == 1 then return n;

function factorial(n, factRes = 1) {
  if (n === 0 || n === 1) return factRes;

  return factorial(n - 1, factRes * n);
}

const res = factorial(5);

console.log(res);
