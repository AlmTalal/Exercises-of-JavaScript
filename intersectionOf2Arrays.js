var intersection = function (nums1, nums2) {
  let numsIn = {};
  let intersection = [];
  if (nums2.length > nums1.length) {
    let swap = nums1;
    nums1 = nums2;
    nums2 = swap;
    swap = null;
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
};

intersection.apply([1, 2, 2, 1], [2, 2]);
