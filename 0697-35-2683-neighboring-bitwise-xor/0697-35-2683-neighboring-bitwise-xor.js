/**
 * @param {number[]} derived
 * @return {boolean}
 */
/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    let n = derived.length;
    let c = 0, f = 0;
    for (let i = 0; i < n - 1; i++) {
        c ^= derived[i];
    }
    if (derived[n - 1] === (f ^ c)) return true;

    c = 1, f = 1;
    for (let i = 0; i < n - 1; i++) {
        c ^= derived[i];
    }
    return derived[n - 1] === (f ^ c);
};