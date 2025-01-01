/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function kthFactor(n, k) {
    let factors = [];

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i); // Add the factor
            if (i !== n / i) {
                factors.push(n / i); // Add its complement factor
            }
        }
    }

    // Sort factors in ascending order
    factors.sort((a, b) => a - b);

    // Return the k-th factor if it exists, else return -1
    return k <= factors.length ? factors[k - 1] : -1;
}