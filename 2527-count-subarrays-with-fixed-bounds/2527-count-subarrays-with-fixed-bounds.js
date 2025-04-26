/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let res = 0;
    let left = -1, lastMin = -1, lastMax = -1;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // If the number is out of bounds, reset window
        if (num < minK || num > maxK) {
            left = i;
            lastMin = -1;
            lastMax = -1;
        }

        if (num === minK) lastMin = i;
        if (num === maxK) lastMax = i;

        // If both min and max have been seen after last invalid number
        if (lastMin !== -1 && lastMax !== -1) {
            res += Math.max(0, Math.min(lastMin, lastMax) - left);
        }
    }

    return res;
};