/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n == 1) return 0;
    
    let res = 0;
    
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            res += i;
            n /= i;
        }
    }
    
    return res;
};