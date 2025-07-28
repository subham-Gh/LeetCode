/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxOr = 0;
    let count = 0;

    // Step 1: Find the max OR possible
    for (let num of nums) {
        maxOr |= num;
    }

    // Step 2: DFS to count subsets that match max OR
    function dfs(index, currentOr) {
        if (index === nums.length) {
            if (currentOr === maxOr) count++;
            return;
        }

        // Include nums[index]
        dfs(index + 1, currentOr | nums[index]);

        // Exclude nums[index]
        dfs(index + 1, currentOr);
    }

    dfs(0, 0);
    return count;
};
