/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
     // Memoization map to store intermediate results
    const memo = new Map();
    
    // Recursive helper function
    function compute(expr) {
        // If the result is already computed, return it
        if (memo.has(expr)) {
            return memo.get(expr);
        }

        const results = [];
        
        // Iterate through the expression to find operators
        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];

            // If the character is an operator, divide the expression
            if (char === '+' || char === '-' || char === '*') {
                // Compute results for the left and right sub-expressions
                const left = compute(expr.substring(0, i));
                const right = compute(expr.substring(i + 1));
                
                // Combine results from left and right sub-expressions
                for (const l of left) {
                    for (const r of right) {
                        if (char === '+') {
                            results.push(l + r);
                        } else if (char === '-') {
                            results.push(l - r);
                        } else if (char === '*') {
                            results.push(l * r);
                        }
                    }
                }
            }
        }
        
        // Base case: if there's no operator, the expression is just a number
        if (results.length === 0) {
            results.push(parseInt(expr));
        }
        
        // Store the result in memoization map
        memo.set(expr, results);
        return results;
    }
    
    return compute(expression);
};