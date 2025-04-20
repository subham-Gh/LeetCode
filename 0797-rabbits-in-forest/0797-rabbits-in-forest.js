/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const map = new Map();
    let total = 0;

    for (let ans of answers) {
        map.set(ans, (map.get(ans) || 0) + 1);
    }

    for (let [key, count] of map.entries()) {
        let groupSize = key + 1;
        let groups = Math.ceil(count / groupSize);
        total += groups * groupSize;
    }

    return total;
};