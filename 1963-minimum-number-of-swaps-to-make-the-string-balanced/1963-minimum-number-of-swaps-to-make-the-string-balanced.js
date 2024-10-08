/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let imbalance = 0, maxImbalance = 0;

    for (let char of s) {
        if (char === ']') {
            imbalance++;  // Increase imbalance when encountering a closing bracket
        } else {
            // Reduce imbalance when encountering an opening bracket, if any imbalance exists
            imbalance--;
        }

        // Track the maximum imbalance
        maxImbalance = Math.max(maxImbalance, imbalance);
    }

    // Since each swap fixes two positions, the minimum swaps is maxImbalance / 2
    return Math.ceil(maxImbalance / 2);
};