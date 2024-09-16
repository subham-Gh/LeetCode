/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let j = 0; // Index of the last unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i]; // Move the unique element to the next position
        }
    }

    return j + 1; // The length of the unique elements
};