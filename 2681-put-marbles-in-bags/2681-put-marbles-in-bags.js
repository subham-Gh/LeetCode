/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    let n = weights.length;
    if (n === 1) return 0;
    
    let max = weights[0] + weights[n - 1], min = weights[0] + weights[n - 1];
    let sum = Array(n - 1).fill(0);

    for (let i = 1; i < n; i++)
        sum[i - 1] = weights[i] + weights[i - 1];

    sum.sort((a, b) => a - b);

    for (let i = 0; i < k - 1; i++) {
        min += sum[i];
        max += sum[n - i - 2];
    }

    return max - min;
};