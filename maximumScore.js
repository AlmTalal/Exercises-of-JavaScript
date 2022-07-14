function maximumScore(nums, multipliers) {
  // left Index of Nums
  let l = 0;
  // Index of multipliers
  let i = 0;
  let maximNum = getTheMaximumNumber(nums, multipliers, i, l);
  posiblities = {};
  return maximNum;
}

function getTheMaximumNumber(nums, multipliers, i, l) {
  // index for right num
  let r = nums.length - 1 - (i - l);
  let right = nums[r] * multipliers[i];
  let left = nums[l] * multipliers[i];
  if (r < 0 || i >= multipliers.length || l >= nums.length) {
    return 0;
  }
  if (posiblities[[i + 1, l]] !== undefined) {
    right = right + posiblities[[i + 1, l]];
  } else {
    right = right + getTheMaximumNumber(nums, multipliers, i + 1, l);
  }
  if (posiblities[[i + 1, l + 1]] !== undefined) {
    left = left + posiblities[[i + 1, l + 1]];
  } else {
    left = left + getTheMaximumNumber(nums, multipliers, i + 1, l + 1);
  }
  let number = Math.max(right, left);
  posiblities[[i, l]] = number;
  return number;
}

// all posible ends for indexes;
let posiblities = {};

maximumScore([-5, -3, -3, -2, 7, 1], [-10, -5, 3, 4, 6]);
