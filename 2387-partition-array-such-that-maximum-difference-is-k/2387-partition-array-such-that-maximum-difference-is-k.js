/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    
    let count = 1; // At least one group is needed
    let start = nums[0]; // Start of current group
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - start > k) {
            count++;
            start = nums[i];
        }
    }
    
    return count;
};
