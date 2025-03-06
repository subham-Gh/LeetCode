/**
 * @param {number[][]} grid
 * @return {number[]}
 */
function findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    const totalNumbers = n * n;
    
    // Calculate expected sum and sum of squares
    const expectedSum = (totalNumbers * (totalNumbers + 1)) / 2;
    const expectedSquareSum = (totalNumbers * (totalNumbers + 1) * (2 * totalNumbers + 1)) / 6;
    
    let actualSum = 0;
    let actualSquareSum = 0;
    
    // Calculate actual sum and sum of squares
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const num = grid[i][j];
            actualSum += num;
            actualSquareSum += num * num;
        }
    }
    
    // Let x be repeated number, y be missing number
    // x - y = actualSum - expectedSum  (eq 1)
    // x² - y² = actualSquareSum - expectedSquareSum  (eq 2)
    // x² - y² = (x - y)(x + y)
    
    const diff = actualSum - expectedSum;              // x - y
    const squareDiff = actualSquareSum - expectedSquareSum;
    const sum = squareDiff / diff;                    // x + y
    
    const repeated = (sum + diff) / 2;                // x
    const missing = (sum - diff) / 2;                 // y
    
    return [repeated, missing];
}