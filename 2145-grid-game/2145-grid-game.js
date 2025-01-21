/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
    const n = grid[0].length;

    // Calculate prefix sums for the top and bottom rows
    const prefixTop = new Array(n + 1).fill(0);
    const prefixBottom = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefixTop[i + 1] = prefixTop[i] + grid[0][i];
        prefixBottom[i + 1] = prefixBottom[i] + grid[1][i];
    }

    // Simulate splits and find the minimum maximum points for the second robot
    let result = Infinity;
    for (let i = 0; i < n; i++) {
        const topRemaining = prefixTop[n] - prefixTop[i + 1];
        const bottomCollected = prefixBottom[i];
        const secondRobotPoints = Math.max(topRemaining, bottomCollected);

        result = Math.min(result, secondRobotPoints);
    }

    return result;
};