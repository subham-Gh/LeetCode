/**
 * @param {number[][]} grid
 * @return {number}
 */
function minCost(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    
    // Directions: [right, left, down, up]
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    // Priority queue for BFS (min-heap)
    const heap = [[0, 0, 0]]; // [cost, row, col]
    const costs = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
    costs[0][0] = 0;

    while (heap.length > 0) {
        const [currentCost, x, y] = heap.shift();

        // If we reached the bottom-right corner
        if (x === rows - 1 && y === cols - 1) {
            return currentCost;
        }

        // Explore all 4 possible directions
        for (let i = 0; i < 4; i++) {
            const [dx, dy] = directions[i];
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
                const nextCost = currentCost + (grid[x][y] === i + 1 ? 0 : 1);
                if (nextCost < costs[nx][ny]) {
                    costs[nx][ny] = nextCost;
                    heap.push([nextCost, nx, ny]);
                    heap.sort((a, b) => a[0] - b[0]); // Keep heap sorted
                }
            }
        }
    }

    return -1; // If no path found
}
