/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const n = prices.length;
    const result = [...prices];
    const stack = []; // Monotonic stack to track indices

    for (let i = 0; i < n; i++) {
        // While stack is not empty and current price is less than or equal to the price at the top of the stack
        while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
            const index = stack.pop(); // Get the index to apply discount
            result[index] -= prices[i]; // Apply discount
        }
        stack.push(i); // Push current index onto the stack
    }

    return result;
};