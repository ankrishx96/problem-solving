/*
Given a deeply nested object, write a recursive function to search if a key exists.

Example:
searchKey(user, "geo") -> true
searchKey(user, "randomKey") -> false
*/

const user = {
  id: 1,
  address: {
    street: "Kulas Light",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

const searchKey = (obj, targetKey) => {
  for (let key in obj) {
    if (key === targetKey) {
      return true;
    }

    if (typeof obj[key] === "object") {
      return searchKey(obj[key], targetKey);
    }
  }

  return false;
};

console.log(searchKey(user, "geo")); // true
console.log(searchKey(user, "zipcode")); // false
