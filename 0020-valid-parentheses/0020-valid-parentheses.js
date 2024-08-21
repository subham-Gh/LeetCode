/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let matchingBracket = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};