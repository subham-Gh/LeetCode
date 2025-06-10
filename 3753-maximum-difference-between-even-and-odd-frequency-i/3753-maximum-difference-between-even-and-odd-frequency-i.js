/**
 * @param {string} s
 * @return {number}
 */
const maxDifference = s => {
    const F = new Map();
    for (const c of s) F.set(c, (F.get(c) ?? 0) + 1);
    let maxOdd = -1, minEven = Infinity;
    for (const f of F.values()) {
        if (f & 1) maxOdd = Math.max(maxOdd, f);
        else minEven = Math.min(minEven, f);
    }
    return maxOdd === -1 || minEven === Infinity ? -1 : maxOdd - minEven;
};