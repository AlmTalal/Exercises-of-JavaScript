/*Write a function that takes in an array of integers and returns the length of the longest peak in the array.

A peak is defined as adjacent integers in the array that are STRICTLY increasing until they reach a tip 
(the highest value in the peak), at which point they become STRICTLY decreasing, At least three integers are required to form a peak

For example, the integers 1,4,10,2 form a peak, but the integers 4,0,10 don't and neither do the integers 1,2,2,0.
Similarly, the integers 1,2,3 don't form a peak because there aren't any STRICTLY decreasing integers after the 3

Sample Input:
array=[1,2,3,3,4,0,10,6,5,-1,-3,2,3]
Sample Output: 6*/


function longestPeaK (array){
  let i = 1 
  let longestPeak = 0; 
  while (i < array.length){
    const isPeak = array[i] > array[i-1] && array[i] > array[i+1];
    if (!isPeak){
      i++;
    }
    if ( isPeak){
      let idxLeft = i-1;
      while( array[idxLeft] < array[idxLeft + 1] && idxLeft > 0){
        idxLeft--;
      }
      let idxRight = i+1;
      while( array[idxRight] < array[idxRight - 1] && idxRight < array.length){
        idxRight++;
      }
      let currentPeak = idxRight - idxLeft ;
      i = idxRight;
      if (longestPeak < currentPeak){
      longestPeak = currentPeak;
      }
    }
  } 
  console.log(longestPeak)
}

longestPeaK([1, 2, 3, 4, 5, 1,0,2])