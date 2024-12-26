/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);

    if ((totalSum + target) % 2 !== 0 || totalSum < Math.abs(target)) return 0;

    const sumP = (totalSum + target) / 2;
    const dp = new Array(sumP + 1).fill(0);
    dp[0] = 1;

    for (const num of nums) {
        for (let j = sumP; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }

    return dp[sumP];
};
