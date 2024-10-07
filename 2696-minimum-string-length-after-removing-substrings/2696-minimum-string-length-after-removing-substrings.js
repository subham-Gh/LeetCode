/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = [];

    for (let char of s) {
        // If the stack is non-empty and the top forms "AB" or "CD", pop the top
        if (stack.length > 0 && ((stack[stack.length - 1] === 'A' && char === 'B') || (stack[stack.length - 1] === 'C' && char === 'D'))) {
            stack.pop();  // Remove the last character as we've found a pair
        } else {
            stack.push(char);  // Push the current character onto the stack
        }
    }

    // The stack contains the remaining characters after all removals
    return stack.length;
};