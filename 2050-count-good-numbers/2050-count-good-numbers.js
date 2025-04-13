/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = 1e9 + 7;

    const modPow = (base, exp, mod) => {
        let result = 1n;
        base = BigInt(base);
        exp = BigInt(exp);
        mod = BigInt(mod);
        while (exp > 0n) {
            if (exp % 2n === 1n) result = (result * base) % mod;
            base = (base * base) % mod;
            exp = exp / 2n;
        }
        return result;
    };

    const evens = Math.floor((n + 1) / 2);
    const odds = Math.floor(n / 2);

    const result = (modPow(5, evens, MOD) * modPow(4, odds, MOD)) % BigInt(MOD);
    return Number(result);
};