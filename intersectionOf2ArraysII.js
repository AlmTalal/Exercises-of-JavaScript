/* Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and you may return
the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000*/

function intersectionOf2Arrays(nums1, nums2) {
  let numsIn = {};
  let intersection = [];
  let counter = 1;
  if (nums1.length < nums2.length) {
    let swap = nums1;
    nums1 = nums2;
    nums2 = swap;
  }
  for (let i = 0; i < nums1.length; i++) {
    if (numsIn[nums1[i]] > -Infinity) {
      numsIn[nums1[i]]++;
    } else {
      numsIn[nums1[i]] = counter;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (numsIn[nums2[i]] > 0) {
      intersection.push(nums2[i]);
      numsIn[nums2[i]]--;
    }
  }
  console.log(intersection);
  return intersection;
}

intersectionOf2Arrays([9, 4, 9, 4], [9, 4, 4]);
