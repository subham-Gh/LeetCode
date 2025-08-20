/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let count = 0;

    // Traverse the matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If cell is 1 and not in first row/col, update value
            if (matrix[i][j] == 1 && i > 0 && j > 0) {
                matrix[i][j] = 1 + Math.min(
                    matrix[i - 1][j],
                    matrix[i][j - 1],
                    matrix[i - 1][j - 1]
                );
            }
            count += matrix[i][j];
        }
    }

    return count;
};
