/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX_INT = 2147483647; // 2^31 - 1
    const MIN_INT = -2147483648; // -2^31

    let reversed = 0;
    let sign = Math.sign(x); // Get the sign of x
    x = Math.abs(x); // Work with absolute value of x

    while (x !== 0) {
        let pop = x % 10; // Extract the last digit
        x = Math.floor(x / 10); // Remove the last digit

        // Check for overflow
        if (reversed > Math.floor(MAX_INT / 10) || (reversed === Math.floor(MAX_INT / 10) && pop > 7)) {
            return 0; // Overflow case for positive numbers
        }
        if (reversed > Math.floor(Math.abs(MIN_INT) / 10) || (reversed === Math.floor(Math.abs(MIN_INT) / 10) && pop > 8)) {
            return 0; // Overflow case for negative numbers
        }

        reversed = reversed * 10 + pop; // Append the digit
    }

    return reversed * sign; // Apply the sign and return
};