/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;
    
    // Remove consecutive duplicates
    let filtered = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            filtered.push(nums[i]);
        }
    }
    
    for (let i = 1; i < filtered.length - 1; i++) {
        if (filtered[i] > filtered[i - 1] && filtered[i] > filtered[i + 1]) {
            count++; // hill
        } else if (filtered[i] < filtered[i - 1] && filtered[i] < filtered[i + 1]) {
            count++; // valley
        }
    }

    return count;
};
