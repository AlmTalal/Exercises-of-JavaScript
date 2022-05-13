/*Write a function that takes in a non-empty array of integers that are sorted in 
ascending order and returns a new array of the same length with the squares of the 
original integers also sorted in ascending order.

Sample Input
array= [1,2,3,5,6,8,9]

Sample Output
[1,4,9,25,36,64,81]
*/

function squaredArray(array, exponente) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], exponente);
  }
  console.log(array);
}

squaredArray([1, 2, 3, 5, 6, 8, 9], 2);
