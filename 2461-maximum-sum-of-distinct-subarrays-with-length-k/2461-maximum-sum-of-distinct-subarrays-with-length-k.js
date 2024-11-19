/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const n = nums.length;
    let maxSum = 0;
    let currentSum = 0;
    const numSet = new Set();

    let left = 0;

    for (let right = 0; right < n; right++) {
        // Expand the window to include nums[right]
        while (numSet.has(nums[right])) {
            // Remove the leftmost element to maintain distinct elements
            numSet.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }

        // Add the new element to the set and to the current sum
        numSet.add(nums[right]);
        currentSum += nums[right];

        // If the window size is exactly k, evaluate max sum
        if (right - left + 1 === k) {
            maxSum = Math.max(maxSum, currentSum);

            // Move left to make room for next element in window
            numSet.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }
    }

    return maxSum;
};