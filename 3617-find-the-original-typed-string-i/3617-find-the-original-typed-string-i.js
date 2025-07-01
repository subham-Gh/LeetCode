/**
 * @param {string} word
 * @return {number}
 */
function possibleStringCount(word) {
    let ans = 1;
    let count = 1;
    let last = word[0];

    for (let i = 1; i < word.length; i++) {
        if (word[i] !== last) {
            ans += count - 1;
            count = 1;
            last = word[i];
        } else {
            count++;
        }
    }

    ans += count - 1;
    return ans;
}