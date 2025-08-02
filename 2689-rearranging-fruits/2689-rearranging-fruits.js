/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    const freq = new Map();

    for (let fruit of basket1) {
        freq.set(fruit, (freq.get(fruit) || 0) + 1);
    }
    for (let fruit of basket2) {
        freq.set(fruit, (freq.get(fruit) || 0) - 1);
    }

    let toSwap = [];
    for (let [fruit, count] of freq.entries()) {
        if (count % 2 !== 0) return -1; // Can't make arrays equal
        let half = Math.abs(count) / 2;
        for (let i = 0; i < half; i++) {
            toSwap.push(fruit);
        }
    }

    toSwap.sort((a, b) => a - b);

    let minFruit = Math.min(...basket1.concat(basket2));
    let totalCost = 0;
    let n = toSwap.length / 2;

    for (let i = 0; i < n; i++) {
        totalCost += Math.min(toSwap[i], 2 * minFruit);
    }

    return totalCost;
};