/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const n = s.length;
    const dp = Array(n + 1).fill(Infinity);  // DP array, initialized to a large value
    dp[0] = 0;  // No extra characters needed for an empty string

    const dictSet = new Set(dictionary);  // Convert dictionary to a set for O(1) lookups

    // Iterate through the string s
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;  // Assume that the current character is extra
        for (let j = 0; j < i; j++) {
            const substring = s.substring(j, i);
            if (dictSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[j]);
            }
        }
    }

    return dp[n];
};