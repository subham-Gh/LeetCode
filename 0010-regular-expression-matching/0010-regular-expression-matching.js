/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    // Create a 2D dp array with false values
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

    // Base case: empty pattern matches empty string
    dp[0][0] = true;

    // Initialize dp[0][j] for the case when s is an empty string
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Fill the dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                // Current characters match
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // Zero occurrences of the preceding element
                dp[i][j] = dp[i][j - 2];

                // One or more occurrences of the preceding element
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    // The final result is in dp[m][n]
    return dp[m][n];
};