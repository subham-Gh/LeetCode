/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map();
    let maxLength = 0;

    // Count the frequency of each number
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Iterate through each key in the map
    for (let [key, value] of map.entries()) {
        if (map.has(key + 1)) {
            maxLength = Math.max(maxLength, value + map.get(key + 1));
        }
    }

    return maxLength;
};
