/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    let n = arr.length;
    let indexMap = new Map();
    let dp = Array(n).fill(0).map(() => Array(n).fill(2)); // Initialize DP array with 2
    let maxLen = 0;

    // Store index of each number for quick lookup
    for (let i = 0; i < n; i++) {
        indexMap.set(arr[i], i);
    }

    // Iterate over all pairs (j, i)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let x = arr[i] - arr[j]; // Previous Fibonacci number
            let k = indexMap.get(x); // Check if x exists before arr[j]

            // Ensure x appears before arr[j] and forms a valid sequence
            if (k !== undefined && k < j) {
                dp[j][i] = dp[k][j] + 1;
                maxLen = Math.max(maxLen, dp[j][i]);
            }
        }
    }
    return maxLen >= 3 ? maxLen : 0;
};