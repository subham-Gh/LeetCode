/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, mod, k) {
    let prefix = 0;
    let result = 0;
    const freq = new Map();
    freq.set(0, 1);  // initialize with prefix 0
    
    for (let num of nums) {
        if (num % mod === k) {
            prefix = (prefix + 1) % mod;
        } else {
            prefix = prefix % mod;
        }

        // target = (prefix - k + mod) % mod
        const target = (prefix - k + mod) % mod;

        result += freq.get(target) || 0;

        freq.set(prefix, (freq.get(prefix) || 0) + 1);
    }

    return result;
};
