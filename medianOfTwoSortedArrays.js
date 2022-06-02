/*Given two sorted arrays nums1 and nums2 of size
 m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.*/

function medianNumberArray(arrayOne, arrayTwo) {
  let idealNum;
  let medianNumber;
  let array = arrayOne.concat(arrayTwo);
  array.sort((a, b) => a - b);
  console.log(array);
  if (array.length % 2 === 0) {
    idealNum = [array[array.length / 2 - 1], array[array.length / 2]];
    medianNumber = idealNum[1] - idealNum[0];
    medianNumber = medianNumber / 2;
    medianNumber = idealNum[0] + medianNumber;
  }
  if (array.length % 2 !== 0) {
    let num = array.length / 2 - 0.5;
    idealNum = array[num];
    medianNumber = idealNum;
  }
  console.log(medianNumber);
  return medianNumber;
}

medianNumberArray([1, 2], [3, 4]);
