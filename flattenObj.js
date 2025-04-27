const obj = {
  user: {
    name: "Ankrish",
    address: {
      line: "Delhi",
      line2: "India",
    },
  },
  hobbies: {
    sports: {
      cricket: true,
      chess: true,
    },
    games: {
      gta: true,
    },
  },
  isTraveling: false,
};

function flatObj(obj, resObj, parentKey) {
  for (let k in obj) {
    let key = parentKey ? `${parentKey}.${k}` : k;
    let value = obj[k];

    if (typeof value === "object") {
      flatObj(value, resObj, key);
    } else {
      resObj[key] = value;
    }
  }
}

const resObj = {};
flatObj(obj, resObj);

console.log("resObj", resObj);

// ---------------------------------------------------------

function flatObjNew(obj) {
  let resObj = {};

  function flatObj(obj, resObj, parentKey) {
    for (let k in obj) {
      let key = parentKey ? `${parentKey}.${k}` : k;
      let value = obj[k];

      if (typeof value === "object") {
        flatObj(value, resObj, key);
      } else {
        resObj[key] = value;
      }
    }
  }

  flatObj(obj, resObj);

  return resObj;
}

console.log(flatObjNew(obj));
