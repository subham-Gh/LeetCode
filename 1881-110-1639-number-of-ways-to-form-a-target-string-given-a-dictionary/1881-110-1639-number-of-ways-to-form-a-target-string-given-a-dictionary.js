/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const MOD = 1e9 + 7;
    const m = target.length, n = words[0].length;

    // Count frequency of each character at each position
    const count = Array.from({ length: n }, () => ({}));
    for (const word of words) {
        for (let j = 0; j < n; j++) {
            count[j][word[j]] = (count[j][word[j]] || 0) + 1;
        }
    }

    // DP array to track ways to form target up to i-th character
    let dp = Array(m + 1).fill(0);
    dp[0] = 1; // 1 way to form an empty target

    // Iterate over columns in the dictionary
    for (let j = 0; j < n; j++) {
        // Update dp array from back to front
        for (let i = m; i > 0; i--) {
            const char = target[i - 1];
            if (count[j][char]) {
                dp[i] = (dp[i] + dp[i - 1] * count[j][char]) % MOD;
            }
        }
    }

    return dp[m];
};
