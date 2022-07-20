/*You are given an integer array coins representing coins of different denominations and an integer amount representing
 a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up
 by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0*/

function coinChange(coins, amount, savedSums = { 0: 0 }) {
  let totalChange = Infinity;
  if (amount in savedSums) {
    if (savedSums[amount] === -1) {
      return (savedSums[amount] = Infinity);
    }
    return savedSums[amount];
  }
  if (amount === 0) {
    savedSums[amount] = 1;
    return savedSums[amount];
  }
  if (amount < 0) {
    savedSums[amount] = Infinity;
    return savedSums[amount];
  }
  let array = [];
  coins.map((coin) => array.push(amount - coin));
  let possibleChanges = array.map((reminder) =>
    coinChange(coins, reminder, savedSums)
  );
  let change = Math.min(...possibleChanges);
  savedSums[amount] = change;
  if (change >= 0) {
    change++;
    savedSums[amount] = change;
    totalChange = Math.min(totalChange, savedSums[amount]);
  }
  if (totalChange === Infinity) {
    totalChange = -1;
  }
  console.log(totalChange);
  return totalChange;
}

coinChange([5, 6], 11);
