/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    let or = 0;
    let last = new Array(32).fill(-1); // store last index where each bit was seen

    for (let i = n - 1; i >= 0; i--) {
        // Update last seen position of each bit
        for (let b = 0; b < 32; b++) {
            if ((nums[i] >> b) & 1) {
                last[b] = i;
            }
        }

        // Find the farthest index we need to include to get the max OR
        let maxReach = i;
        for (let b = 0; b < 32; b++) {
            if (last[b] !== -1) {
                maxReach = Math.max(maxReach, last[b]);
            }
        }

        result[i] = maxReach - i + 1;
    }

    return result;
};
