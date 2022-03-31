/*Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

a subsequence of an array is a set of numbers that aren;t necessarily adjacent in the array but that are in the same order as the
 appear in the array.
For instance: the nu,bers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4].
Note that a single number in an array and the array itself are both valid subsequence of the array.


 [5,1,22,25,6,-1,8,10],[1,6,-1,10]


Sample output
true*/

function validateSubsequence(array, subsequence) {
  let i = 0;
  let j = 0;
  let marcador = 0;
  while (i < array.length && j < subsequence.length) {
    if (array[i] === subsequence[j]) {
      i++;
      j++;
      marcador++;
    }
    if (array[i] !== subsequence[j]) {
      i++;
    }
  }
  if (marcador === subsequence.length) {
    console.log(true);
  } else console.log(false);
}

validateSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 5, 9, 18]);

//hola