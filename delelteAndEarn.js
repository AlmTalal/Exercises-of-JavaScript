/*You are given an integer array nums. You want to maximize the number of points you get by performing the 
following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to 
nums[i] - 1 and every element equal to nums[i] + 1.
Return the maximum number of points you can earn by applying the above operation some number of times.

 

Example 1:

Input: nums = [3,4,2]
Output: 6
Explanation: You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.
Example 2:

Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: You can perform the following operations:
- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.
 

Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i] <= 104*/

function deleteAndEarn(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let totalNums = {};
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (totalNums[nums[i]] === undefined) {
      totalNums[nums[i]] = 1;
      newNums.push(nums[i]);
    } else {
      totalNums[nums[i]]++;
    }
  }
  newNums.sort((a, b) => a - b);
  let currentEarn = 0;
  let previosEarn = newNums[0] * totalNums[newNums[0]];
  let lastEarn = 0;
  for (let i = 1; i < newNums.length; i++) {
    let num = newNums[i] * totalNums[newNums[i]];
    if (newNums[i] === newNums[i - 1] + 1) {
      currentEarn = Math.max(previosEarn, lastEarn + num);
      lastEarn = previosEarn;
      previosEarn = currentEarn;
    } else {
      (currentEarn = previosEarn + num),
        (lastEarn = previosEarn),
        (previosEarn = currentEarn);
    }
  }
  return currentEarn;
}

deleteAndEarn([8, 10, 4, 9, 1, 3, 5, 9, 4, 10]);
