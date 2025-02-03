/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let inc = 1, dec = 1; // Initialize both increasing and decreasing counters
    let maxLen = 1;       // Minimum subarray length is 1 (single element)

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            inc++;        // Strictly increasing
            dec = 1;      // Reset decreasing counter
        } else if (nums[i] < nums[i - 1]) {
            dec++;        // Strictly decreasing
            inc = 1;      // Reset increasing counter
        } else {
            // Reset both if equal (strict condition broken)
            inc = 1;
            dec = 1;
        }
        maxLen = Math.max(maxLen, inc, dec); // Update max length
    }

    return maxLen;
};