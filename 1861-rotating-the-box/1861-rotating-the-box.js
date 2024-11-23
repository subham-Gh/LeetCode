/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const m = box.length;
    const n = box[0].length;

    // Simulate gravity for each row
    for (let i = 0; i < m; i++) {
        let emptyPos = n - 1; // Pointer for the last empty position
        for (let j = n - 1; j >= 0; j--) {
            if (box[i][j] === '*') {
                // Reset emptyPos when hitting an obstacle
                emptyPos = j - 1;
            } else if (box[i][j] === '#') {
                // Move stone to the furthest empty space
                box[i][j] = '.';
                box[i][emptyPos] = '#';
                emptyPos--;
            }
        }
    }

    // Rotate the box 90 degrees clockwise
    const rotatedBox = Array.from({ length: n }, () => Array(m).fill('.'));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotatedBox[j][m - i - 1] = box[i][j];
        }
    }

    return rotatedBox;
};