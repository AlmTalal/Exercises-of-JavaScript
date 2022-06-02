/*write a function that takes in a non-empty array of integers and 
returns an array of the same length, where each element in the output 
array is equal to the product of every other number in the input array.

In other words, the value at output[i] is equal to the product of 
every number in the input array other than input[i]

note that you're expected to solve this problem without using 
division.

Sample input:
array=[5,1,4,2]
sample output:
[8,40,10,20]

// 8 is equal to  1x4x2
// 40 is equal to 5x4x2
// 10 is equal to 5x1x2
// 20 is equal to 5x1x4*/

function arrayOfProducts(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length === 1) {
      newArray[i] = array[i];
      break;
    }
    let left = i - 1;
    let right = i + 1;
    let leftResult = array[left];
    left--;
    let rightResult = array[right];
    right++;
    while (left >= 0) {
      leftResult = leftResult * array[left];
      left--;
    }
    while (right < array.length) {
      rightResult = rightResult * array[right];
      right++;
    }
    if (leftResult === undefined) {
      newArray[i] = rightResult;
    } else if (rightResult === undefined) {
      newArray[i] = leftResult;
    } else {
      newArray[i] = leftResult * rightResult;
    }
  }
  return newArray;
}

arrayOfProducts([5, 2, 3]);
