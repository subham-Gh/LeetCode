/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let rows = mat.length, cols = mat[0].length;
    let numbeMap = new Map();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            numbeMap.set(mat[i][j], [i, j]);
        }
    }

    let row_count = Array(rows).fill(0);
    let col_count = Array(cols).fill(0);

    for (let i = 0; i < arr.length; i++) {
        let [r, c] = numbeMap.get(arr[i]);
        row_count[r] += 1;
        col_count[c] += 1;
        
        if (row_count[r] === cols || col_count[c] === rows) {
            return i;
        }
    }
};