/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
function countGoodStrings(low, high, zero, one) {
    const MOD = 1e9 + 7;

    // Initialize DP array
    const dp = new Array(high + 1).fill(0);
    dp[0] = 1; // Base case: one way to create a string of length 0

    // Fill DP array
    for (let i = 1; i <= high; i++) {
        if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD;
        if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD;
    }

    // Sum up results for lengths between `low` and `high`
    let result = 0;
    for (let i = low; i <= high; i++) {
        result = (result + dp[i]) % MOD;
    }

    return result;
}