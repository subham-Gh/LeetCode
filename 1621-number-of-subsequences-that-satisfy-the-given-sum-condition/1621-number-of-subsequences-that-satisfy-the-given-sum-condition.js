/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const mod = 1e9 + 7;
    nums.sort((a, b) => a - b);
    const n = nums.length;

    // Precompute powers of 2 up to n
    const pow2 = Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % mod;
    }

    let left = 0;
    let right = n - 1;
    let result = 0;

    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            result = (result + pow2[right - left]) % mod;
            left++;
        } else {
            right--;
        }
    }

    return result;
};
