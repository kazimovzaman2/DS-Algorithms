function firstRecuringNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}

function firstRecuringNumber1(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return arr[i];
    } else {
      map.set(arr[i], i);
    }
  }
  console.log(map);
}

function firstRecuringNumber2(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
  console.log(map);
  return undefined;
}

console.log(firstRecuringNumber([2, 5, 1, 3, 5, 1, 2, 4]));
console.log(firstRecuringNumber1([2, 5, 1, 3, 5, 1, 2, 4]));
console.log(firstRecuringNumber2([2, 5, 1, 3, 5, 1, 2, 4]));
