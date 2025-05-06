/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const n = nums.length;
    let ans = new Array(n);

    for (let i = 0; i < n; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
};
