/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const n = grid.length;
    const islandMap = new Map();
    let index = 2;  // Start labeling islands from 2 (to differentiate from original 1s)
    let maxIsland = 0;
    
    // DFS to mark islands and count their sizes
    function dfs(x, y, idx) {
        if (x < 0 || y < 0 || x >= n || y >= n || grid[x][y] !== 1) return 0;
        grid[x][y] = idx;
        return 1 + dfs(x + 1, y, idx) + dfs(x - 1, y, idx) + dfs(x, y + 1, idx) + dfs(x, y - 1, idx);
    }
    
    // Step 1: Find all islands and store their sizes
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const size = dfs(i, j, index);
                islandMap.set(index, size);
                maxIsland = Math.max(maxIsland, size);
                index++;
            }
        }
    }

    // Step 2: Check each 0 and compute max island size by flipping it
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let connectedIslands = new Set();
                let possibleSize = 1;  // Convert `0` to `1`

                // Check all 4 possible directions
                for (let [dx, dy] of [[0,1], [0,-1], [1,0], [-1,0]]) {
                    let nx = i + dx, ny = j + dy;
                    if (nx >= 0 && ny >= 0 && nx < n && ny < n && grid[nx][ny] > 1) {
                        connectedIslands.add(grid[nx][ny]);
                    }
                }
                
                // Sum up unique island sizes
                for (let island of connectedIslands) {
                    possibleSize += islandMap.get(island);
                }

                maxIsland = Math.max(maxIsland, possibleSize);
            }
        }
    }

    return maxIsland;
};
