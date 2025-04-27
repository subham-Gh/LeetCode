/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let count = 0;  // Count of Good Squads
    let n = nums.length;

    // Check each group of 3 consecutive soldiers
    for (let i = 0; i < n - 2; i++) {
        let first = nums[i];
        let middle = nums[i + 1];
        let third = nums[i + 2];

        // Check if the squad is a Good Squad
        if ((first + third) * 2 === middle) {
            count++;  // Good Squad!
        }
    }

    return count;  // Return total Good Squads count
};