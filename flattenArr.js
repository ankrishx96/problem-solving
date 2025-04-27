const arr = [1, [2, [3, 4], 5], 6];

const flattenArray = (arr) => {
  let resArr = [];

  for (let val of arr) {
    if (Array.isArray(val)) {
      resArr.push(...flattenArray(val));
    } else {
      resArr.push(val);
    }
  }

  return resArr;
};

console.log(flattenArray(arr));

// --------------------------------------------------

const flattenArrayNew = (arr) => {
  let resArr = [];

  function flatMe(arr) {
    for (let val of arr) {
      if (Array.isArray(val)) {
        flatMe(val);
      } else {
        resArr.push(val);
      }
    }
  }

  flatMe(arr);

  return resArr;
};

console.log(flattenArrayNew(arr));
