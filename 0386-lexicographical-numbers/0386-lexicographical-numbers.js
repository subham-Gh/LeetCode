/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const result = [];
    
    // Helper function to perform DFS
    const dfs = (current) => {
        // If the current number exceeds n, stop the recursion
        if (current > n) return;
        
        // Add the current number to the result list
        result.push(current);
        
        // Try to multiply by 10 to go deeper (e.g., from 1 -> 10 -> 100, etc.)
        for (let i = 0; i <= 9; i++) {
            const next = current * 10 + i;
            if (next > n) break;
            dfs(next);
        }
    };

    // Start DFS from each root digit 1 through 9
    for (let i = 1; i <= 9; i++) {
        if (i > n) break;
        dfs(i);
    }
    
    return result;
};