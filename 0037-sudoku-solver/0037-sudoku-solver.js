/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
    solve();

    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const char = num.toString();
                        if (isValid(row, col, char)) {
                            board[row][col] = char;
                            if (solve()) return true;
                            board[row][col] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    function isValid(row, col, char) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === char) return false;
            if (board[i][col] === char) return false;

            const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const boxCol = 3 * Math.floor(col / 3) + i % 3;

            if (board[boxRow][boxCol] === char) return false;
        }
        return true;
    }
}