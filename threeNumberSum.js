/*Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. 
If there is such a triplet present in array, then print the triplet and return true. Else return false.
*/

function threeNumSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let inicio = 0;
  let izquierda = inicio + 1;
  let derecha = array.length - 1;
  let resultados = [];
  for (inicio; inicio < array.length - 2; inicio++) {
    izquierda = inicio + 1;
    derecha = array.length - 1;
    while (izquierda < derecha) {
      let numero = array[inicio] + array[derecha] + array[izquierda];
      if (numero < targetSum) {
        izquierda++;
      } else if (numero > targetSum) {
        derecha--;
      } else if (numero === targetSum) {
        resultados.push([array[inicio], array[izquierda], array[derecha]]);
        izquierda++;
      }
    }
  }
  console.log(resultados);
}

threeNumSum([-1, 0, 1, 2, -1, -4], 0);
