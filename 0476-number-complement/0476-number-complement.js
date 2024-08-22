/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    // Calculate the mask, which is a number with all bits set to 1 and of the same length as num
    let mask = ~0; // Start with a mask full of 1s (infinite 1s)

    // Shift the mask left until it's just larger than the number
    while (mask & num) {
        mask <<= 1;
    }

    // The complement is found by XORing num with the inverse of the mask
    return ~mask ^ num;
};