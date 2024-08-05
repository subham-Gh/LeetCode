/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const frequency = {};
    
    // Count occurrences of each string
    for (const str of arr) {
        if (frequency[str]) {
            frequency[str]++;
        } else {
            frequency[str] = 1;
        }
    }
    
    // Find the kth distinct string
    let count = 0;
    for (const str of arr) {
        if (frequency[str] === 1) {
            count++;
            if (count === k) {
                return str;
            }
        }
    }
    
    // If fewer than k distinct strings, return empty string
    return "";
};