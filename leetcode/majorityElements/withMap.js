function majorityElements(nums) {
  let map = new Map();

  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  let majorityCount = Math.floor(nums.length / 2);

  for (let [num, count] of map) {
    if (count > majorityCount) {
      return num;
    }
  }
}

console.log(majorityElements([3, 2, 3]));
