/**
 * @param {number[][]} grid
 * @return {number}
 */
function isMagicSquare(grid, row, col) {
    const nums = new Set();
    
    // Collect numbers in the 3x3 subgrid and check they are between 1 and 9
    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            let num = grid[i][j];
            if (num < 1 || num > 9 || nums.has(num)) {
                return false;
            }
            nums.add(num);
        }
    }

    // Check the magic sum (should be 15 for a 3x3 grid)
    const sum = grid[row][col] + grid[row][col + 1] + grid[row][col + 2];
    for (let i = 0; i < 3; i++) {
        if (grid[row + i][col] + grid[row + i][col + 1] + grid[row + i][col + 2] !== sum) {
            return false;
        }
    }
    
    for (let j = 0; j < 3; j++) {
        if (grid[row][col + j] + grid[row + 1][col + j] + grid[row + 2][col + j] !== sum) {
            return false;
        }
    }
    
    if (grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2] !== sum) {
        return false;
    }
    
    if (grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col] !== sum) {
        return false;
    }
    
    return true;
}

function numMagicSquaresInside(grid) {
    let count = 0;

    for (let i = 0; i <= grid.length - 3; i++) {
        for (let j = 0; j <= grid[0].length - 3; j++) {
            if (isMagicSquare(grid, i, j)) {
                count++;
            }
        }
    }

    return count;
}
