/*Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be 
unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000*/

function twoArraysIntersection(nums1, nums2) {
  let numsIn = {};
  let intersection = [];
  if (nums2.length > nums1.length) {
    let swap = nums1;
    nums1 = nums2;
    nums2 = swap;
  }
  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i];
    numsIn[num] = true;
  }
  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i];
    if (numsIn[num]) {
      numsIn[num] = false;
      intersection.push(num);
    }
  }
  console.log(intersection);
  return intersection;
}

twoArraysIntersection([1, 2, 2, 1], [2, 2]);
