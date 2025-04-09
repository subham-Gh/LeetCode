/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    if (nums.some(num => num < k)) return -1;

    const greater = new Set();
    for (let num of nums) {
        if (num > k) greater.add(num);
    }

    return greater.size;
};