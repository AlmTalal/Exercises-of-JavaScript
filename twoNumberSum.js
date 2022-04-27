/*Given an array of integers, return the indices of the two numbers whose sum is equal to a given target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9.
[2, 7]

*/

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let izquierda = 0;
  let derecha = array.length - 1;
  while (izquierda < derecha) {
    let numero = array[izquierda] + array[derecha];
    if (numero === targetSum) {
      console.log([izquierda, derecha]);
      izquierda++;
    }
    if (numero < targetSum) {
      izquierda++;
    }
    if (numero > targetSum) {
      derecha--;
    }
  }
}

twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1], 10);
