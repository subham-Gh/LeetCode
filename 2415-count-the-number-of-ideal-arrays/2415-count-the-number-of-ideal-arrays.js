/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
const MOD = 1e9 + 7;

/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function(n, maxValue) {
    const maxLen = 14; // max length for chain due to log2(maxValue)
    
    // Precompute binomial coefficients
    const C = Array.from({length: n + 1}, () => Array(maxLen + 1).fill(0));
    for (let i = 0; i <= n; i++) {
        C[i][0] = 1;
        for (let j = 1; j <= Math.min(i, maxLen); j++) {
            C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD;
        }
    }

    // DP: count how many ways to make sequences ending at each number
    const dp = Array(maxValue + 1).fill(0).map(() => Array(maxLen + 1).fill(0));
    for (let i = 1; i <= maxValue; i++) dp[i][1] = 1;

    for (let len = 2; len <= maxLen; len++) {
        for (let i = 1; i <= maxValue; i++) {
            for (let j = i * 2; j <= maxValue; j += i) {
                dp[j][len] = (dp[j][len] + dp[i][len - 1]) % MOD;
            }
        }
    }

    // Now compute the total number of ideal arrays
    let res = 0;
    for (let val = 1; val <= maxValue; val++) {
        for (let len = 1; len <= maxLen; len++) {
            res = (res + dp[val][len] * C[n - 1][len - 1]) % MOD;
        }
    }
    
    return res;
};