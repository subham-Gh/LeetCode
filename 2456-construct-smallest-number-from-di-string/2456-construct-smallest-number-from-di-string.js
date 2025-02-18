/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let stack = [];
    let result = "";
    let num = 1; // Numbers range from 1 to n+1
    
    for (let i = 0; i <= pattern.length; i++) {
        stack.push(num);
        num++;

        // If at the end or encountering 'I', pop stack to form increasing order
        if (i === pattern.length || pattern[i] === 'I') {
            while (stack.length > 0) {
                result += stack.pop();
            }
        }
    }
    
    return result;
};