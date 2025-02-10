/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];

    for (let ch of s) {
        if (ch >= '0' && ch <= '9') {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(ch);
        }
    }

    return stack.join('');
};