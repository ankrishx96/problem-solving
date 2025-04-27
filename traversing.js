// Print Numbers Reverse

function printDesc(n) {
  if (n === 1) {
    console.log(n);
    return;
  }

  console.log(n);

  printDesc(n - 1);
}

printDesc(5); // 5 4 3 2 1

// Print Numbers Ascending

function printAsc(n, startNum = 1) {
  if (startNum === n) {
    console.log(startNum);
    return;
  }

  console.log(startNum);

  printAsc(n, startNum + 1);
}

printAsc(5); // 1 2 3 4 5
