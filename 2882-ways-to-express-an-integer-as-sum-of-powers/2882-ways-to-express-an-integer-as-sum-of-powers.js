/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    const MOD = 1e9 + 7;
    let dp = Array.from({length: n+1}, () => Array(n+1).fill(-1));
    
    function fun(sum, j) {
        if (sum === n) return 1;
        if (dp[sum][j] !== -1) return dp[sum][j];
        let a = 0;
        for (let i = j + 1; i <= n; i++) {
            let k = 1;
            let x1 = x;
            while (x1--) {
                k *= i;
                if (sum + k > n) break;
            }
            if (sum + k <= n) {
                a = (a + fun(sum + k, i)) % MOD;
            } else break;
        }
        dp[sum][j] = a;
        return a;
    }
    
    return fun(0, 0);
};