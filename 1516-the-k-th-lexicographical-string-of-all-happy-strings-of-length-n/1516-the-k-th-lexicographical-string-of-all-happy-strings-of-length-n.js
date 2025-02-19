/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let result = [];
    
    // Helper function for backtracking
    function backtrack(current) {
        if (current.length === n) {
            result.push(current);
            return;
        }
        
        for (let ch of ['a', 'b', 'c']) {
            if (current.length === 0 || current[current.length - 1] !== ch) {
                backtrack(current + ch);
            }
        }
    }
    
    backtrack(""); // Start backtracking with an empty string
    
    return result.length >= k ? result[k - 1] : "";
};