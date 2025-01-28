/**
 * @param {number[][]} grid
 * @return {number}
 */
function findMaxFish(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    // DFS function to calculate the sum of fish in a connected component
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= rows || j >= cols || visited[i][j] || grid[i][j] === 0) {
            return 0;
        }

        visited[i][j] = true; // Mark the cell as visited
        let fish = grid[i][j];

        for (const [dx, dy] of directions) {
            fish += dfs(i + dx, j + dy);
        }

        return fish;
    };

    let maxFish = 0;

    // Traverse the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] > 0 && !visited[i][j]) {
                maxFish = Math.max(maxFish, dfs(i, j));
            }
        }
    }

    return maxFish;
}