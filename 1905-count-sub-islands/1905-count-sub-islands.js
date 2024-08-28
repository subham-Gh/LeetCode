/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    const m = grid1.length;
    const n = grid1[0].length;
    
    // Function to perform DFS
    function dfs(x, y) {
        // If out of bounds or the cell is water, return true
        if (x < 0 || y < 0 || x >= m || y >= n || grid2[x][y] === 0) {
            return true;
        }
        
        // Mark the cell as visited
        grid2[x][y] = 0;
        
        // Check if this cell in grid2 is a valid part of the sub-island
        let isSubIsland = grid1[x][y] === 1;

        // Check all 4 directions
        const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for (const [dx, dy] of dirs) {
            isSubIsland = dfs(x + dx, y + dy) && isSubIsland;
        }
        
        return isSubIsland;
    }
    
    let subIslandCount = 0;
    
    // Iterate over each cell in grid2
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) {
                // Start a DFS from each land cell
                if (dfs(i, j)) {
                    subIslandCount++;
                }
            }
        }
    }
    
    return subIslandCount;
};