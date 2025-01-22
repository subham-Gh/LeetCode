/**
 * @param {number[][]} isWater - Matrix where 1 represents water cells and 0 represents land cells
 * @return {number[][]} - Matrix of assigned heights where water cells are 0 and adjacent cells differ by at most 1
 */
var highestPeak = function(isWater) {
    const m = isWater.length;
    const n = isWater[0].length;
    const q = [];
    
     const height = isWater.map((row, i) => 
        row.map((cell, j) => {
            if (cell === 1) {
                q.push([i, j, 0]); 
                return 0;
            }
            return Infinity;
        })
    );
    
     let idx = 0;
    while (idx < q.length) {
        const [x, y, h] = q[idx++];
        
        // Check all 4 directions
        if (x > 0 && height[x-1][y] === Infinity) {
            height[x-1][y] = h + 1;
            q.push([x-1, y, h + 1]);
        }
        if (x < m-1 && height[x+1][y] === Infinity) {
            height[x+1][y] = h + 1;
            q.push([x+1, y, h + 1]);
        }
        if (y > 0 && height[x][y-1] === Infinity) {
            height[x][y-1] = h + 1;
            q.push([x, y-1, h + 1]);
        }
        if (y < n-1 && height[x][y+1] === Infinity) {
            height[x][y+1] = h + 1;
            q.push([x, y+1, h + 1]);
        }
    }
    
    return height;
};