/**
 * @param {number[]} nums
 * @return {number[]}
 */
function largestDivisibleSubset(nums) {
    if (nums.length === 0) return [];

    // Step 1: Sort the numbers
    nums.sort((a, b) => a - b);

    // Step 2: Initialize the DP and previous array
    const dp = new Array(nums.length).fill(1);
    const prev = new Array(nums.length).fill(-1);
    let maxSubsetSize = 1;
    let maxSubsetIndex = 0;

    // Step 3: Build the dp and prev arrays
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }

        // Track the largest subset
        if (dp[i] > maxSubsetSize) {
            maxSubsetSize = dp[i];
            maxSubsetIndex = i;
        }
    }

    // Step 4: Reconstruct the largest divisible subset
    const result = [];
    let index = maxSubsetIndex;
    while (index !== -1) {
        result.push(nums[index]);
        index = prev[index];
    }

    // Since we added elements in reverse order, reverse the result
    return result.reverse();
}