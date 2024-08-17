/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const m = points.length;
    const n = points[0].length;

    // Initialize dp with the first row's points
    let dp = [...points[0]];

    for (let i = 1; i < m; i++) {
        // Create a temporary array to store the current row's max points
        let leftMax = new Array(n).fill(0);
        let rightMax = new Array(n).fill(0);

        // Left-to-right sweep
        leftMax[0] = dp[0];
        for (let j = 1; j < n; j++) {
            leftMax[j] = Math.max(leftMax[j - 1] - 1, dp[j]);
        }

        // Right-to-left sweep
        rightMax[n - 1] = dp[n - 1];
        for (let j = n - 2; j >= 0; j--) {
            rightMax[j] = Math.max(rightMax[j + 1] - 1, dp[j]);
        }

        // Calculate max points for the current row
        for (let j = 0; j < n; j++) {
            dp[j] = points[i][j] + Math.max(leftMax[j], rightMax[j]);
        }
    }

    // The answer is the maximum points in the last row
    return Math.max(...dp);

};