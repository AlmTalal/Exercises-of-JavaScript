/*Smallest Difference

Write a function that takes in two non-empty array of integers, finds the pair of numbers (one from each array)
 whose absolute difference is closest to zero, and returns an array containing these two numbers, with the nuber from the
  first array in the first position.

note that the absolute difference of two integers is the distance between them on the real number line. for example: 
the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1

you can assume that there will be one pair of numbers with the smallest difference.

Sample Input:
arrayOne =[-1,5,10,20,28,3]
arrayTwo = [26,134,135,15,17]

Sample output:
[28,26]

*/

function smallestDifference(groupOne, groupTwo) {
  groupOne.sort((a, b) => a - b);
  groupTwo.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let currentMinimum = Infinity;
  let currentSum = undefined;
  let smallestDifferenceArray = [];
  while (i < groupOne.length && j < groupTwo.length) {
    let numberOne = groupOne[i];
    let numberTwo = groupTwo[j];
    if (numberOne < numberTwo) {
      currentSum = numberTwo - numberOne;
      i++;
    }
    if (numberOne >= numberTwo) {
      currentSum = numberOne - numberTwo;
      j++;
    }
    if (currentSum < currentMinimum) {
      currentMinimum = currentSum;
      smallestDifferenceArray = [numberOne, numberTwo];
    }
    if (currentSum === 0) {
      smallestDifferenceArray = [numberOne, numberTwo];
      break;
    } else {
      continue;
    }
  }
  console.log(smallestDifferenceArray);
}

smallestDifference(
  [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
  [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
);
