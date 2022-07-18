/* Given an array and a targetSum, return true if the targetsum is possible wit the Numbers that are inside the Array.
 */

function canSum(array, targetSum, savedSums = {}) {
  if (targetSum in savedSums) {
    return savedSums[targetSum];
  }
  if (targetSum === 0) {
    savedSums[targetSum] = true;
    return savedSums[targetSum];
  }
  if (targetSum < 0) {
    savedSums[targetSum] = false;
    return;
  }

  for (let num of array) {
    let reminder = targetSum - num;
    let status = canSum(array, reminder, savedSums);
    if (status) {
      return true;
    }
  }

  return false;
}

canSum([4, 5, 2, 7, 1], 300);
