/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function maximumGain(s, x, y) {
    let res = 0;

    // Helper function to remove a pair ("ab" or "ba") and get score
    const removePattern = (str, first, second, score) => {
        let stack = [];
        let tempScore = 0;

        for (let char of str) {
            if (stack.length && stack[stack.length - 1] === first && char === second) {
                stack.pop();
                tempScore += score;
            } else {
                stack.push(char);
            }
        }

        return { newStr: stack.join(''), score: tempScore };
    };

    // Decide which to remove first: "ab" or "ba"
    if (x >= y) {
        let { newStr, score } = removePattern(s, 'a', 'b', x);
        res += score;

        let { score: score2 } = removePattern(newStr, 'b', 'a', y);
        res += score2;
    } else {
        let { newStr, score } = removePattern(s, 'b', 'a', y);
        res += score;

        let { score: score2 } = removePattern(newStr, 'a', 'b', x);
        res += score2;
    }

    return res;
}