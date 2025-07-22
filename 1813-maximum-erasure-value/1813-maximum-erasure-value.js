/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let seen = new Set();
    let left = 0, right = 0;
    let maxSum = 0, currentSum = 0;

    while (right < nums.length) {
        while (seen.has(nums[right])) {
            seen.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }

        seen.add(nums[right]);
        currentSum += nums[right];
        maxSum = Math.max(maxSum, currentSum);
        right++;
    }

    return maxSum;
};