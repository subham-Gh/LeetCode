/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const total = nums.reduce((sum, num) => sum + num, 0);
    
    // If the total sum is odd, we cannot partition it into two equal subsets
    if (total % 2 !== 0) return false;
    
    const target = total / 2;
    const dp = Array(target + 1).fill(false);
    dp[0] = true;  // A sum of 0 is always achievable (with an empty subset)
    
    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    
    return dp[target];
};
