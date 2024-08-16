/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
   const result = [];
    candidates.sort((a, b) => a - b); // Step 1: Sort the array

    function backtrack(start, target, path) {
        if (target === 0) {
            result.push([...path]);  // If the target is met, add the combination to the result
            return;
        }
        if (target < 0) return;  // Terminate the exploration if the sum exceeds the target

        for (let i = start; i < candidates.length; i++) {
            // Step 4: Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            path.push(candidates[i]);  // Include the current element in the path
            backtrack(i + 1, target - candidates[i], path);  // Move to the next element
            path.pop();  // Backtrack: Remove the last element to explore other combinations
        }
    }

    backtrack(0, target, []);  // Start the backtracking process
    return result; 
};