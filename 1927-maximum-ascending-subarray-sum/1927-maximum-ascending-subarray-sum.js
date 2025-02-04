/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let currentSum = nums[0];   // Start with the first element
    let maxSum = nums[0];       // Initialize the maximum sum

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentSum += nums[i];  // Continue the ascending sequence
        } else {
            currentSum = nums[i];   // Reset if the sequence breaks
        }
        maxSum = Math.max(maxSum, currentSum);  // Update maxSum
    }

    return maxSum;
};
