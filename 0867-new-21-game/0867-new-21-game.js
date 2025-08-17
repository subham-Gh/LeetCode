/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
function new21Game(n, k, maxPts) {
    if (k === 0 || n >= k + maxPts) return 1.0;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1.0;
    let windowSum = 1.0;
    let result = 0.0;

    for (let i = 1; i <= n; i++) {
        dp[i] = windowSum / maxPts;

        if (i < k) {
            windowSum += dp[i];
        } else {
            result += dp[i]; // If i >= k, Alice stops, so we count this.
        }

        if (i - maxPts >= 0) {
            windowSum -= dp[i - maxPts];
        }
    }

    return result;
}
