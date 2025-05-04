/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const map = new Map();
    let count = 0;

    for (const [a, b] of dominoes) {
        const key = a < b ? `${a}${b}` : `${b}${a}`;
        const current = map.get(key) || 0;
        count += current;
        map.set(key, current + 1);
    }

    return count;
};