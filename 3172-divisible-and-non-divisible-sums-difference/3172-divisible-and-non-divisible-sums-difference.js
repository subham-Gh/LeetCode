/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += (i % m === 0) ? -i : i;
    }
    return total;
};
