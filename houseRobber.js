function houseRober(nums) {
  let totalSwag = new Array(nums.length);
  if (nums.length === 1) {
    return nums[0];
  }
  totalSwag[0] = nums[0];
  totalSwag[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    totalSwag[i] = Math.max(totalSwag[i - 2] + nums[i], totalSwag[i - 1]);
  }
  return totalSwag[totalSwag.length - 1];
}

houseRober([2]);
