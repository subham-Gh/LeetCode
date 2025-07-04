/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
const kthCharacter = (k, op) => {
    let res = 0;
    let bitIndex = Math.floor(Math.log2(k - 1));
    const chars = 'abcdefghijklmnopqrstuvwxyz';

    while (k > 1) {
        const pow = 2 ** bitIndex;
        if (k > pow) {
            res += op[bitIndex];
            k -= pow;
        }
        bitIndex--;
    }

    return chars[res % 26];
};