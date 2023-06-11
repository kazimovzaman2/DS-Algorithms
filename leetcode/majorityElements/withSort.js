function majorityElement(nums) {
  nums.sort();
  let ans = nums[Math.floor(nums.length / 2)];

  let count = 0;
  for (let num of nums) {
    if (num === ans) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return ans;
  } else {
    return undefined;
  }
}

console.log(majorityElement([3, 2, 3]));
