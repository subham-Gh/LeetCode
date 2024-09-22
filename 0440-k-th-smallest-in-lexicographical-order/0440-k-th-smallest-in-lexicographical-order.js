/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    // Helper function to calculate how many numbers between current and n with the given prefix
    const countSteps = (current, n) => {
        let steps = 0;
        let first = current;
        let last = current;
        
        while (first <= n) {
            // Count all numbers between [first, last] that are within the range
            steps += Math.min(n + 1, last + 1) - first;
            first *= 10;  // Move to the next level (deeper into the tree)
            last = last * 10 + 9;  // The last number in this range at the current depth
        }
        
        return steps;
    };

    let current = 1;
    k -= 1;  // Decrement k because we're starting from 1 (which is already the first number)
    
    while (k > 0) {
        const steps = countSteps(current, n);
        
        if (steps <= k) {
            // If k is larger than the number of steps under the current prefix, skip this prefix
            k -= steps;
            current += 1;  // Move to the next prefix (sibling)
        } else {
            // If k is within the current prefix, move deeper
            current *= 10;  // Move to the next level (deeper prefix)
            k -= 1;  // We've already accounted for the current number
        }
    }
    
    return current;
};