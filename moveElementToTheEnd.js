/*You are given an array of integers and an integer.
 Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

The function should perform this in place (i.e., it should mutate the input array)
 and doesn't need to maintain the order of the other integers.

Sample Inpiut
array = [2,1,2,2,2,3,4,2]
toMove = 2

Sample Output
[1,3,4,2,2,2,2,2]

"the numbers 1,3 and 4 could be ordered differently"*/

//function moveElement (array,last){

function moveElement(array, toMove) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    if (array[end] === toMove) {
      end--;
    }
    if (array[start] !== toMove) {
      start++;
    }
    if (array[start] === toMove && array[end] !== toMove) {
      swap(start, end, array);
    }
  }
}

function swap(start, end, array) {
  let dealer = array[start];
  array[start] = array[end];
  array[end] = dealer;
}

moveElement([1, 2, 2, 2, 2, 4, 5, 6, 2], 2);
