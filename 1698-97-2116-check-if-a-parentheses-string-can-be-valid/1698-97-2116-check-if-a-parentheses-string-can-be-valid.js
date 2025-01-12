/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
function canBeValid(s, locked) {
    if (s.length % 2 !== 0) return false; // Odd length strings cannot be valid

    let low = 0, high = 0;
    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '0') {
            low = Math.max(low - 1, 0);
            high++;
        } else if (s[i] === '(') {
            low++;
            high++;
        } else { // s[i] === ')'
            low = Math.max(low - 1, 0);
            high--;
        }

        if (high < 0) return false; // Too many ')'
    }

    return low === 0; // Ensure all '(' are matched
}
