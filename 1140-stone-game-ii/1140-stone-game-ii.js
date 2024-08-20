/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const suffixSum = Array(n).fill(0);
    
    suffixSum[n - 1] = piles[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = piles[i] + suffixSum[i + 1];
    }

    const dp = Array(n).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        for (let M = 1; M <= n; M++) {
            if (i + 2 * M >= n) {
                dp[i][M] = suffixSum[i];
            } else {
                for (let X = 1; X <= 2 * M; X++) {
                    dp[i][M] = Math.max(dp[i][M], suffixSum[i] - dp[i + X][Math.max(M, X)]);
                }
            }
        }
    }

    return dp[0][1];
};