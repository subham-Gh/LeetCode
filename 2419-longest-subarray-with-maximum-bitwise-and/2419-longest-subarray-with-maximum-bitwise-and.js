/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  const maxNum = Math.max(...nums);  // Step 1: Find the maximum element
  let maxLength = 0;
  let currentLength = 0;

  // Step 2: Traverse the array and find the longest subarray with maxNum
  for (let num of nums) {
    if (num === maxNum) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 0;
    }
  }

  return maxLength;
};