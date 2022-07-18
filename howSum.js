function howSum(array, targetSum, savedSums = {}, stack = []) {
  if (targetSum === 0) {
    savedSums[targetSum] = true;
    console.log(stack);
    return true;
  }
  if (targetSum < 0) {
    return false;
  }
  for (num of array) {
    let reminder = targetSum - num;
    stack.push(num);
    let status = howSum(array, reminder, savedSums, stack);
    if (status === true) {
      savedSums[targetSum] = true;
      return savedSums[targetSum];
    }
    stack.pop();
    savedSums[targetSum] = false;
  }
  return null;
}

howSum([7, 11, 19], 300);
