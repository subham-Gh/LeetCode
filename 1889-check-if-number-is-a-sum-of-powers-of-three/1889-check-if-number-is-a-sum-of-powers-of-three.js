/**
 * @param {number} n
 * @return {boolean}
 */
function checkPowersOfThree(n) {
    while (n > 0) {
        if (n % 3 === 2) {  // If the remainder is 2, it cannot be a sum of distinct powers of 3
            return false;
        }
        n = Math.floor(n / 3);  // Divide by 3 to check the next digit in the base-3 representation
    }
    return true;
}
