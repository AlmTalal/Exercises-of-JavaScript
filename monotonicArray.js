/*Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing

Non-increasing elements aren't necessarily exclusively decreasing; they simpley don't increase.
Similarly, non-decreasing elements aren't necessarily exclusively  increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

Sample Input
array = [-1,-5,-10,-1100,-1100,-1101,-1102,-9001]
Sample Output = true*/

function monotonicArray(array) {
  let isIncreasing = true;
  let decreasing = true;
  for (let i = 1; i < array.length ; i++) {
    if (array[i] < array[i - 1]) {
      isIncreasing = false;
    }
    if (array[i] > array[i - 1]) {
      decreasing = false;
    }
  }
  console.log(isIncreasing || decreasing);
}

monotonicArray([1, 2, 3, 4, 5, 6, 7, 6]);
