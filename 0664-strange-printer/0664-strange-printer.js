/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: single characters
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Fill the dp table for substrings of length 2 to n
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            const j = i + length - 1;
            dp[i][j] = length; // max turns (worst case)
            for (let k = i; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j]);
            }
            if (s[i] === s[j]) {
                dp[i][j] = Math.min(dp[i][j], dp[i][j - 1]);
            }
        }
    }

    return dp[0][n - 1];
};