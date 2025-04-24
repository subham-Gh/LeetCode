/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    const totalDistinct = new Set(nums).size;
    let result = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const freq = new Map();
        let distinctCount = 0;

        for (let j = i; j < n; j++) {
            if (!freq.has(nums[j])) {
                freq.set(nums[j], 1);
                distinctCount++;
            } else {
                freq.set(nums[j], freq.get(nums[j]) + 1);
            }

            if (distinctCount === totalDistinct) {
                result++;
            }
        }
    }

    return result;
};
