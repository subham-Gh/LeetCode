/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let remainder = totalSum % p;

    // If the total sum is already divisible by p, no subarray needs to be removed.
    if (remainder === 0) return 0;

    let prefixSum = 0;
    let minLength = nums.length;
    let modMap = new Map();
    modMap.set(0, -1);  // Initial value to handle the case where the whole prefix is valid.

    for (let i = 0; i < nums.length; i++) {
        prefixSum = (prefixSum + nums[i]) % p;

        // Calculate the required mod value that, when removed, makes the sum divisible by p.
        let target = (prefixSum - remainder + p) % p;

        if (modMap.has(target)) {
            minLength = Math.min(minLength, i - modMap.get(target));
        }

        modMap.set(prefixSum, i);
    }

    return minLength === nums.length ? -1 : minLength;
};