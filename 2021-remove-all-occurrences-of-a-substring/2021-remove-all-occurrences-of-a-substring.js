/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let stack = [];
    let partLength = part.length;

    for (let ch of s) {
        stack.push(ch);

        // Check if the end of the stack matches `part`
        if (stack.length >= partLength && stack.slice(-partLength).join('') === part) {
            stack.length -= partLength; // Remove `part` from stack
        }
    }

    return stack.join('');
};