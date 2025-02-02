/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let countDrops = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            countDrops++;
        }
    }
    
    return countDrops <= 1;
};