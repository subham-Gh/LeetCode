/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
     // Initialize the grid
    const grid = Array.from({ length: m }, () => Array(n).fill(0));

    // Mark guards and walls on the grid
    for (const [x, y] of guards) {
        grid[x][y] = 1; // Guard
    }
    for (const [x, y] of walls) {
        grid[x][y] = -1; // Wall
    }

    // Function to mark guarded cells in a direction
    const markDirection = (x, y, dx, dy) => {
        let i = x + dx;
        let j = y + dy;
        while (i >= 0 && i < m && j >= 0 && j < n) {
            if (grid[i][j] === -1 || grid[i][j] === 1) break; // Stop at wall or guard
            if (grid[i][j] === 0) grid[i][j] = 2; // Mark as guarded
            i += dx;
            j += dy;
        }
    };

    // Process each guard
    for (const [x, y] of guards) {
        markDirection(x, y, -1, 0); // Up
        markDirection(x, y, 1, 0);  // Down
        markDirection(x, y, 0, -1); // Left
        markDirection(x, y, 0, 1);  // Right
    }

    // Count unguarded empty cells
    let unguardedCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) unguardedCount++;
        }
    }

    return unguardedCount;
};