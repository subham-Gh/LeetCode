const MOD = 1e9 + 7;

// Fast modular exponentiation
function modPow(base, exponent, mod) {
    let result = 1;
    base %= mod;
    while (exponent > 0) {
        if (exponent % 2 === 1) result = (result * base) % mod;
        base = (base * base) % mod;
        exponent = Math.floor(exponent / 2);
    }
    return result;
}

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    // Step 1: Get all powers of 2 from binary representation of n
    let powers = [];
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            powers.push(i); // Store the exponent i (2^i)
        }
    }

    // Step 2: Process queries
    let result = [];
    for (let [l, r] of queries) {
        let product = 1;
        for (let i = l; i <= r; i++) {
            product = (product * modPow(2, powers[i], MOD)) % MOD;
        }
        result.push(product);
    }

    return result;
};
