/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    const N = 1e6 + 1; // 10^6 + 1
    const isPrime = new Array(N).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime

    // **Step 1: Use Sieve of Eratosthenes to mark non-prime numbers**
    for (let i = 2; i * i < N; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < N; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // **Step 2: Collect primes in the given range**
    const primes = [];
    for (let i = Math.max(left, 2); i <= right; i++) {
        if (isPrime[i]) primes.push(i);
    }

    // **Step 3: Find the closest prime pair**
    if (primes.length < 2) return [-1, -1];

    let minDiff = Infinity, res = [-1, -1];
    for (let i = 1; i < primes.length; i++) {
        let diff = primes[i] - primes[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
            res = [primes[i - 1], primes[i]];
        }
    }

    return res;
};