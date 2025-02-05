/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = (s1, s2) => {
    const [a, b, c, d, e] = [...s1].reduce((s, v, i) => v === s2[i] ? s : s + v + s2[i] , '');
    return !a || (!e && a == d && b == c);
};