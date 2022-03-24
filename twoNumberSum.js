/*Given an array and a value, find if there is a couple in array whose sum is equal to the given value. 
If there is such a couple present in array, then print the triplet and return true. Else return false.
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
