/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    // Create an array to count remainders
    let remainderCount = new Array(k).fill(0);
    
    // Populate the remainderCount array
    for (let num of arr) {
        let remainder = ((num % k) + k) % k;  // Handle negative remainders
        remainderCount[remainder]++;
    }
    
    // Check if all remainders can be paired
    for (let i = 0; i <= k / 2; i++) {
        if (i === 0) {
            // Special case: remainder 0, count must be even
            if (remainderCount[i] % 2 !== 0) return false;
        } else {
            // For remainder i, remainderCount[i] must match remainderCount[k - i]
            if (remainderCount[i] !== remainderCount[k - i]) return false;
        }
    }
    
    return true;
};