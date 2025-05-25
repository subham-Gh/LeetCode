/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let map = {};
    let length = 0;
    let hasMiddle = false;

    for (let word of words) {
        const reversed = word[1] + word[0];
        if (map[reversed] > 0) {
            length += 4;
            map[reversed]--;
        } else {
            map[word] = (map[word] || 0) + 1;
        }
    }

    for (let word in map) {
        if (word[0] === word[1] && map[word] > 0) {
            length += 2;
            break;  // Only one symmetric word can be placed in the middle
        }
    }

    return length;
};
