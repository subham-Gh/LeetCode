/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let min_val = arrays[0][0];
    let max_val = arrays[0][arrays[0].length - 1];
    let max_dist = 0;

    for (let i = 1; i < arrays.length; i++) {
        const currentArray = arrays[i];
        const currentMin = currentArray[0];
        const currentMax = currentArray[currentArray.length - 1];

        max_dist = Math.max(max_dist, Math.abs(currentMax - min_val), Math.abs(max_val - currentMin));

        min_val = Math.min(min_val, currentMin);
        max_val = Math.max(max_val, currentMax);
    }

    return max_dist;
};